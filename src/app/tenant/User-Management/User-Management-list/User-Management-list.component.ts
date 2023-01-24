import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

import { CountryService } from "@shared/Services/country-service";
import { StateService } from "@shared/Services/state-service";
import { CityService } from "@shared/Services/City-Service";

import { TenantUserManagementService } from "@shared/Services/tenant-user-management.service";
import { BuildingModel } from "@shared/interface/Building.interface";
import { CountryModel } from "@shared/Dto/country-model";
import { StateModel } from "@shared/Dto/state-model";
import { CityModel } from "@shared/Dto/city-model";

import {
  FilterOperator,
  ParamMethod,
  QueryParamModel,
} from "@shared/interface/QueryParam.interface";

import { RoleAuthorizerUtility, Roles } from "@shared/utility/role-authorizer.utility";

import { ClientModel } from "@shared/interface/Client.interface";
import { SecUserModel } from "@shared/interface/UserManagement.interface";
import { TenantBuildingService } from "@shared/Services/tenant-building.service";
import { TenantServicesService } from "@shared/Services/tenant-services.service";

interface filterModel {
  CreatedByDate: string;
  PriorityId: string;
  StatusId: string;
}

interface gridRowModel {
  id: number;
  building: string;
  name: string;
  country: string;
  state: string;
  city: string;
  floorNo: number;
  parkingNo: number;
  flatNo: number;
  slotNo: number;
  phoneNo: string;
  email: string;
  availableSlotNo: number;
  roleId:number;
}

@Component({
  selector: "app-User-Management-list",
  templateUrl: "./User-Management-list.component.html",
  styleUrls: ["./User-Management-list.component.css"],
})
export class UserManagementListComponent
  extends RoleAuthorizerUtility
  implements OnInit
{
  public readonly allowedPageSizes = [5, 10, 30, 50, 100, "all"];
  public readonly displayModes = [
    { text: "Display Mode 'full'", value: "full" },
    { text: "Display Mode 'compact'", value: "compact" },
  ];
  public displayMode = "compact";
  public showPageSizeSelector = true;
  public showInfo = true;
  public showNavButtons = true;

  public FilterForm = new FormGroup({
    countryId: new FormControl(""),
    buildingId: new FormControl(""),
    stateId: new FormControl(""),
    cityId: new FormControl(""),
  });

  public showEdit: boolean = true;

  public GridData = [];
  public GridDataRowCount = 0;

  private queryParamList: QueryParamModel[] = [];

  public CountryList: CountryModel[] = [];
  public buildingList: BuildingModel[] = [];
  public StateList: StateModel[] = [];
  public CityList: CityModel[] = [];

  private SecUserId = parseInt(localStorage.getItem("userId"));
  private SecUserRoleId = parseInt(localStorage.getItem("roleId"));
  private SecUserData: SecUserModel;

  public BuildingId: number;

  public UserList: SecUserModel[] = [];

  constructor(
    private router: Router,
    public buildingService: TenantBuildingService,
    private _tenantService: TenantServicesService,
    public CountryService: CountryService,
    public StateService: StateService,
    public CityService: CityService,
    private _tenantUserManagement: TenantUserManagementService
  ) {
    super();
    this.onEditClick = this.onEditClick.bind(this);
  }

  async ngOnInit(): Promise<void> {
    await this.LoadUserData();
    await this.loadCountry();
    await this.loadQueryParamList();
    await this.loadUsers();
    await this.loadGridData();
  }

  private async LoadUserData(): Promise<void> {
    if (this.SecUserId == null) return; //! Exit If UserId is null

    // TODO 1: Load SecUser Data From DB
    this.SecUserData = await this._tenantService.GetUserByIdUsingPromise(
      this.SecUserId
    );

    const { buildingId } = this.SecUserData;
    if (buildingId) {
      this.BuildingId = buildingId;
    };
  }

  async loadCountry(): Promise<void> {
    //* Load Building
    this.CountryList = await this.CountryService.GetAllCountries();
  }

  async loadBuilding(): Promise<void> {
    //* Load Building
    this.buildingList = await this.buildingService.GetAllBuildings();
  }

  async loadState(queryParam?: QueryParamModel[]): Promise<void> {
    this.StateList = await this.StateService.GetAllStates(queryParam);
  }

  async loadCity(queryParam?: QueryParamModel[]): Promise<void> {
    this.CityList = await this.CityService.GetAllCities(queryParam);
  }

  loadQueryParamList(): void {
    const temp: QueryParamModel[] = [];

    let roleIDList = "2|22|23";

    if(this.SecUserRoleId == Roles.MAINTAINER_OFFICER){
      roleIDList = '22';
    }

    temp.push({
      QueryParam: "roleId",
      value: roleIDList,
      method: ParamMethod.FILTER,
      filterOperator: FilterOperator.EQUAL,
    });
    
    if(this.SecUserRoleId == Roles.MAINTAINER_OFFICER){
      temp.push({
        QueryParam: "countryId",
        value: '6',
        method: ParamMethod.FILTER,
        filterOperator: FilterOperator.EQUAL,
      });
      temp.push({
        QueryParam: "buildingId",
        value: this.BuildingId,
        method: ParamMethod.FILTER,
        filterOperator: FilterOperator.EQUAL,
      });
    }

    const filterOptions = this.FilterForm.value;
    debugger;
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

  async loadUsers(): Promise<void> {
    //* Load Building
    this.UserList = await this._tenantUserManagement.GetAllUsers(
      this.queryParamList
    );
  }

  private loadGridData(): void {
    const data = [];

    this.UserList.forEach((userManagement) => {
      const name = userManagement.fullName;
      const country = userManagement.countryName;
      const state = userManagement.stateName;
      const city = userManagement.cityName;
      const building = userManagement.buildingName;
      const phoneNo = userManagement.telephone;
      const email = userManagement.email;

      data.push({
        id: userManagement.id,
        building,
        name,
        country,
        state,
        city,
        phoneNo,
        email,
        roleId: userManagement.roleId,
      } as gridRowModel);
    });

    this.GridData = data;
  }

  onEditClick(event): void {
    const Id: number = event.row.data.id;
    const roleId = event.row.data.roleId;

    const URL = roleId == Roles.MAINTAINER_OFFICER ? `/app/userManagement/edit` : `/app/userManagement/editTenant`;

    console.log(URL, Id);

    this.router.navigate([URL, Id]);
  }

  onCountryChange(value): void {
    const queryParam: QueryParamModel[] = [
      {
        QueryParam: "countryId",
        value,
        method: ParamMethod.FILTER,
        filterOperator: FilterOperator.EQUAL,
      },
    ];

    this.loadState(queryParam);
  }

  onStateChange(value): void {
    console.log(value);
    const queryParam: QueryParamModel[] = [
      {
        QueryParam: "stateId",
        value,
        method: ParamMethod.FILTER,
        filterOperator: FilterOperator.EQUAL,
      },
    ];

    this.loadCity(queryParam);
  }
  onChangePage(){
    if(this.SecUserRoleId==Roles.MAINTAINER_OFFICER){
      this.router.navigate([`/app/userManagement/createTenant`]);
    }
    else{
      this.router.navigate([`/app/userManagement/create`]);
    }
  }
  async OnFilterFormSubmit(): Promise<void> {
    // TODO 1: Load Service Request
    await this.loadQueryParamList();
    // TODO 2: Load Building
    await this.loadUsers();
    // TODO 3: Load Grid Data
    await this.loadGridData();
  }

  async resetFilterFormSubmit(): Promise<void> {
    // TODO 1: Reset Form
    this.FilterForm.reset();
    // TODO 2: Load Service Request
    await this.loadQueryParamList();
    // TODO 3: Load Service Request
    await this.loadUsers();
    // TODO 4: Load Grid Data
    await this.loadGridData();
  }
}
