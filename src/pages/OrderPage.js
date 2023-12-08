import React from 'react';
import ProductRow from '../components/Order/ProductRow.js';
import products from '../data/products.js';

function OrderPage() {
    return (
    <>

        <h2>Order</h2>
                
                <p class="form_intro">Welcome to my order page! </p>

                <article>

                <form action="" method="" id="orderForm" name="orderForm">
                    
                    <fieldset>
                        <legend>Contact and Shipping Information</legend>
        
                        <label for="name" class="required"><strong>*Enter your name: </strong></label>
                        <input type="text" 
                          name="name" 
                          id="name" 
                          tabindex="1" 
                          autofocus
                          placeholder="First and Last Name"  
                          required
                          aria-required="true"
                         />
                        <label for="emailAddress" class="required"><strong>*Enter your email address:</strong></label>
                        <input type="email" 
                          name="emailAddress" 
                          id="emailAddress" 
                          tabindex="2" 
                          rows="2"
                          placeholder="example@input.com"  
                          required
                          aria-required="true"></input>

                        <label for="address" class="required"><strong>*Enter your physical address:</strong> </label>
                        <input type="text" 
                        class="address"
                          name="address" 
                          id="address" 
                          tabindex="3" 
                          placeholder="123 Street, City ST"  
                          required
                          aria-required="true"
                         /> 

                         <label for="delivery" class="required"><strong>Enter your delivery instructions:</strong></label>
                         <textarea 
                           name="delivery" 
                           id="delivery" 
                           rows="3" 
                           tabindex="4"
                           placeholder="Optional: Delivery instructions up to 1000 characters"
                           autocapitalize="on"
                           autocorrect="on"
                           minlength="1" maxlength="1000"
                           aria-required="true"
                         ></textarea>
                         <p> * <italic>Required Fields</italic></p>
                    </fieldset>
                        
                    <fieldset>
                        <legend>Our Products for Purchase</legend>

                        <p>Use the buttons to increase or decrease the quantities between 0 and 10.</p>
                            <table id="products">
                                
                               
                                <thead>
                                    <th scope="col">Company</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Current Price</th>
                                    <th scope="col">Order Quantity</th>
                                </thead>
                                
                                <caption>Select one product to order: </caption>
                                

                                <tbody>
                                {products.map((product, i) => 
                                  <ProductRow
                                      product={product} 
                                      key={i}
                                  />)}
                                </tbody>

                                <tfoot>
                                <th scope="col"></th>
                                    <th scope="col">Order Total:</th>
                                    <th scope="col">TODO</th>
                                    <th scope="col">TODO</th>
                                </tfoot>
                            </table>

                    </fieldset>

                    <label for="submit"> 
                        <button type="submit" 
                        id="submit" 
                        tabindex="7"
                        name="submit"> 
                        Submit Order </button>
                    </label>
                                

            </form>
        </article>
        </>
    );
}
export default OrderPage;