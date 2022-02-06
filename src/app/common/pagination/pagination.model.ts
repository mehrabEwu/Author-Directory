export class Pagination {
count: number;
lastItemIndex: number;
page: number;
totalCount: number;
totalPages: number;

constructor(obj:any) {
this.count = obj?.count || 0
this.lastItemIndex = obj?.lastItemIndex || 0
this.page = obj?.page || 0
this.totalCount = obj?.totalCount || 0
this.totalPages = obj?.totalPages|| 0
}
}
