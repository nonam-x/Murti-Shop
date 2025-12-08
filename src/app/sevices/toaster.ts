import { inject, Injectable } from '@angular/core';
import { HotToastService } from '@ngxpert/hot-toast';


@Injectable({
  providedIn: 'root'
})
export class Toaster {
  toaster = inject(HotToastService)

success(massage:string){
  this.toaster.success(massage);
}
error(massage:string){
  this.toaster.error(massage);
}

}
