import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { PedidosService } from './models/pedidos.service';
import { LazyLoadEvent } from 'primeng/api';
import { Pedidos } from './models/pedido.model';
@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: DashboardComponent }
    ])],
    exports: [RouterModule]
})
export class DashboardsRoutingModule { 
    totalRecords!: number;

    loading: boolean = false;

    selectAll: boolean = false;
    orders!: Pedidos;
    constructor(pedidosService:PedidosService) {}

    ngOnInit() {

        this.loading = true;
    }

    loadCustomers(event: LazyLoadEvent) {
        this.loading = true;
    }

    onSelectionChange(value = []) {
        this.selectAll = value.length === this.totalRecords;
    }

    // onSelectAllChange(event: any) {
    //     const checked = event.checked;

    //     if (checked) {
    //         this.customerService.getCustomers().then((res) => {
    //             this.selectedCustomers = res.customers;
    //             this.selectAll = true;
    //         });
    //     } else {
    //         this.selectedCustomers = [];
    //         this.selectAll = false;
    //     }
    // }
}
