import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { ToastrService } from "ngx-toastr";
import { FloorModel } from "@shared/interface/Floor.interface";
import { FilterOperator, ParamMethod, QueryParamModel, } from "@shared/interface/QueryParam.interface";
import { TenantBuildingService } from "@shared/Services/tenant-building.service";
import { FloorType } from "@shared/interface/FloorType.interface";
import { ParkingSlotModel } from "@shared/interface/ParkingSlot.interface";
import { BuildingModel } from "@shared/interface/Building.interface";
import { ActivatedRoute, Router } from '@angular/router';
import { FlatModel } from "@shared/interface/Flat.interface";
import { values } from 'lodash-es';



interface gridRowModel {
  name: string;
  building: string;
  floor: string;
  flatname: string

}


@Component({
  selector: 'app-view-parking-slot',
  templateUrl: './view-parking-slot.component.html',
  styleUrls: ['./view-parking-slot.component.css']
})





export class ViewParkingSlotComponent implements OnInit {
  public ParkingSlotURL: string;
  private BuildingId: number;

  public modalRef?: BsModalRef;
  public ParkingFloorList: FloorModel[] = [];
  public FloorList: FloorModel[] = [];
  public ResidenceFloorList: FloorModel[] = [];
  public ParkingSlotList: ParkingSlotModel[] = [];
  public Building: BuildingModel;
  public Buildinglist: BuildingModel[];
  public GridData = [];
  public currentParkingSlotName = '';
  public slot = '';
  private queryParamList: QueryParamModel[] = [];
  private currentParkingSlotId: number;
  private QueryParam: QueryParamModel[];
  public FlatList: FlatModel[];
  public FlatList1: FlatModel[];

  public loadslot: ParkingSlotModel[];
  public loadfloors: FloorModel[];

  public buildingname
  // public parking = false;


  public ViewForm = new FormGroup({
    floorId: new FormControl(""),
    id: new FormControl(""),
  })

  public AddParkingSlotDateForm = new FormGroup({
    name: new FormControl(""),
    FlatId: new FormControl(""),
  })


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private _toster: ToastrService,
    private _tenantBuilding: TenantBuildingService,
  ) { }

  async ngOnInit() {
    debugger
    this.route.params.subscribe((params) => {
      this.BuildingId = +params["buildingId"];
    });


    this.ParkingSlotURL = `/app/buildings/${this.BuildingId}/parkingSlots`;

    await this.loadQueryParamList();
    await this.loadParkingSlots();
    await this.loadBuildings();
    // await this.loadFloor();
    await this.loadFloors();
    await this.loadFlat();
    await this.loadGridData();
  }

  openModal(template: TemplateRef<any>, value, id) {
    debugger
    this.currentParkingSlotName = value;
    this.currentParkingSlotId = id
    this.modalRef = this.modalService.show(template);

    console.log(`Open Model: ${this.currentParkingSlotName}(${this.currentParkingSlotId})`);
  };


  async loadBuildings(): Promise<void> {
    this.Buildinglist = await this._tenantBuilding.GetAllBuildings();

    const building1 = this.Buildinglist?.find(el => el.id == this.BuildingId);
    this.buildingname = building1.name


    // var abc = this.Buildinglist?.find(el => el.id == building.name  )?.name;
  }



  async loadFlat(): Promise<void> {

    debugger

    const temp: QueryParamModel[] = [
      {
        QueryParam: "BuildingId",
        value: this.BuildingId,
        method: ParamMethod.FILTER,
        filterOperator: FilterOperator.EQUAL,
      }, {
        QueryParam: "parkingSlotId",
        value: null,
        method: ParamMethod.FILTER,
        filterOperator: FilterOperator.EQUAL,
      },
    ];

    this.FlatList = await this._tenantBuilding.GetAllFlat(temp);
  }





  async loadFloors(queryParam?: QueryParamModel[]): Promise<void> {
    //debugger
    this.FloorList = await this._tenantBuilding.GetAllFloor(this.queryParamList);

    this.ResidenceFloorList = this.FloorList.filter((el) => el.floorTypeId == FloorType.RESIDENCE);

    this.ParkingFloorList = this.FloorList.filter((el) => el.floorTypeId == FloorType.PARKING);

    this.ParkingSlotList = this.ParkingSlotList.filter((el) => el.name)
    this.loadFlat()
  }

  async loadParkingSlot(queryParam?: QueryParamModel[]): Promise<void> {
    // debugger
    this.ParkingSlotList = await this._tenantBuilding.GetAllParkingSlot(
      queryParam
    );
  }


  // async loadFloor(queryParam?: QueryParamModel[]): Promise<void> {
  //   debugger
  //   this.loadfloors = await this._tenantBuilding.GetAllFloor(queryParam);
  // }

  async loadSlot(queryParam?: QueryParamModel[]): Promise<void> {
    // debugger
    this.loadslot = await this._tenantBuilding.GetAllParkingSlot(queryParam);

  }

  async onFlorChange(value) {
    // debugger
    const queryParam: QueryParamModel[] = [
      {
        QueryParam: "floorId",
        value,
        method: ParamMethod.FILTER,
        filterOperator: FilterOperator.EQUAL,
      },
    ];
    // console.log(queryParam);


    this.ParkingSlotList = await this._tenantBuilding.GetAllParkingSlot(queryParam);

  }
  onslotChange() { }


  async loadParkingSlots(): Promise<void> {
    // debugger
    this.ParkingSlotList = await this._tenantBuilding.GetAllParkingSlot(this.queryParamList);
  }



  async loadGridData(): Promise<void> {
    // debugger
    const data = [];
    this.FlatList1 = await this._tenantBuilding.GetAllFlat()

    this.ParkingSlotList.forEach((slot) => {

      debugger
      const name = slot?.name;
      const building = this.Buildinglist?.find(el => el.id == slot.buildingId)?.name;
      const floor = this.FloorList?.find((el) => el.id == slot.floorId);
      const Allotted = slot?.isAllotted;
      const flatname = this.FlatList1.find((el) => el.parkingSlotId == slot.id)?.name;


      // console.log(flatname);


      //debugger
      data.push({
        id: slot?.id,
        name,
        building,
        floor: floor?.name,
        floorId: floor?.id,
        isAllotted: Allotted,
        flatname,
        // flatId:flatname?.id,

      } as gridRowModel);

    });

    this.GridData = data;
    // console.log({ data })
    // console.log('three');
  }

  loadQueryParamList(): void {
    // debugger



    const temp: QueryParamModel[] = [];

    temp.push({
      QueryParam: "BuildingId",
      value: this.BuildingId,
      method: ParamMethod.FILTER,
      filterOperator: FilterOperator.EQUAL,
    });

    const filterOptions = this.ViewForm.value;

    for (const QueryParam in filterOptions) {
      if (Object.prototype.hasOwnProperty.call(filterOptions, QueryParam)) {
        const value = filterOptions[QueryParam];

        if (value && value != "null")
          temp.push({
            QueryParam,
            value,
            method: ParamMethod.FILTER,
            filterOperator: FilterOperator.EQUAL,
          });
      }
    }

    this.queryParamList = temp;
  }


  async OnFilterFormSubmit(): Promise<void> {
    // TODO 1: Load Service Request
    await this.loadQueryParamList();
    // TODO 2: Load Flats
    await this.loadParkingSlots();
    // TODO 3: Load Grid Data
    await this.loadGridData();

    
  }

  async resetFilterFormSubmit(): Promise<void> {
    // TODO 1: Reset Form
    this.ViewForm.reset();
    // TODO 2: Load Service Request
    await this.loadQueryParamList();
    // TODO 3: Load Service Request
    await this.loadParkingSlots();
    // TODO 4: Load Grid Data
    await this.loadGridData();
  }

  viewparking() {
    //debugger
  }


  // public fID =  this.AddParkingSlotDateForm.get('FlatId').value;

  async onAddParkingSlotDataFormSubmit(): Promise<void> {
    debugger
    if (this.AddParkingSlotDateForm.invalid) return;

    const flatID = this.AddParkingSlotDateForm.get('FlatId')?.value
    if (!flatID) return;

    console.log(`onSubmit: FlatID(${flatID})`);

    await this._tenantBuilding.UpdateParkingSlot(this.currentParkingSlotId, { "isAllotted": true });
    debugger

    await this._tenantBuilding.UpdateFlats(flatID, {
      "ParkingSlotId": this.currentParkingSlotId,
    });
    debugger

    this._toster.info("Parking Updated");
    this.modalRef.hide();
    await this.loadParkingSlots();
    await this.loadGridData();
    await this.loadFlat();
  }


}
