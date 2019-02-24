import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cartItems: any;
  editItem: any;
  isEditModalVisible = false;
  qtyArray = [1, 2, 3, 4];
  oldEditItem: any;
  editedIndex: number;
  isFreeShipping = false;
  constructor(private http: HttpClient) {
  }
  ngOnInit() {
    this.http.get('assets/cart.json').subscribe((data: any) => {
      console.log(data);
      this.cartItems = data.productsInCart;
    });
  }
  onEditClick(editItem: any, index) {
    this.isEditModalVisible = true;
    this.editItem = editItem;
    this.editedIndex = index;
    this.oldEditItem = JSON.parse(JSON.stringify(editItem));
    console.log(editItem);
  }
  onModalClose(event) {
    event.stopPropagation();
    this.cartItems[this.editedIndex] = this.oldEditItem;
    this.isEditModalVisible = false;
  }
  onColorSelect(color) {
    this.editItem.p_selected_color = color;
  }
  onSizeChange(event) {
    this.editItem.p_selected_size.code = event.target.value;
    console.log(this.editItem.p_selected_size);
  }
  onQtyChange(event) {
    this.editItem.p_quantity = parseInt(event.target.value);
  }
  getSubTotal() {
    let subtotal = 0;
    for (const item of this.cartItems) {
      subtotal += (item.p_price * item.p_quantity);
    }
    if (subtotal > 50) {
      this.isFreeShipping = true;
    }
    return subtotal;
  }
  onEditSubmit() {
    this.isEditModalVisible = false;
  }
  onRemove(index) {
    this.cartItems = this.cartItems.filter((cartItem) => {
      return cartItem != this.cartItems[index];
    });
  }
}
