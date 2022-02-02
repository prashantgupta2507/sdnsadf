import React, { useState } from 'react';
import Logo from '../logo.png'
import CustomizedDialogs from './CustomizedDialogs';

export default function NavbarMain() {
    const mens = ["All", "Men's T-Shirts", "Men's Casual Shirts", "Men's Formal Shirts", "Men's Kurtas", "Men's Blazers", "Men's Raincot", "Men's Suit"];

    const mens2 = ["All", "Men's Jeans", "Men's Trousers", "Men's Trackpants", "Men's Shorts", "Men's Dhoti", "Men's Ethnic Pyjama", "Men's Cargos"];

    const women = ["All", "Women Sarees", "Women Kurtas & Kurtis", "Ethnic Dresses", "Women Gowns", "Women Lehenga Cholis", "Women Laggings & Patialas", "Women Dupatta"];

    const women2 = ["All", "Women Tops", "Women Dresses", "Women T-shirts & Polo T-shirts", "Women Jeans", "Women Trouser", "Women Jumpsuit"];

    const mens3 = ["All", "Men's Sports Shoes", "Men's Casual Shoes", "Men's Sandals & Floaters", "Men's Slippers & Flip Flops", "Men's Formal Shoes", "Men's Ethnic Shoes"];

    const womens3 = ["All", "Women Flats", "Women Heels", "Women Wedges", "Women Slipper Flip Flops", "Women Casual Shoes", "Women Sports Shoes", "Women Sneakers"];

    const watches = ["Men & Women Watches", "Men & Women Sunglasses", "Wallets", "Men & Women Belts", "Women Fashion Jewellery", "Men Fashion Jewellery"];

    const bags = ["All", "Backpacks", "Suitcases & Trolleys", "Dufflebags", "Handbags", "Travel Accessories"];

    const audio = ["All", "Bluetooth Headphones", "Wired Headphones", "True Wireless Earbuds", "Bluetooth Speakers", "Soundbars", "Home Theatres", "Remote Control"];

    const camera = ["All", "DSLR & Mirrorless", "Camera tripods", "Camera Lenses", "Drone", "Flashes"];

    const laptop = ["All", "Mouse", "Laptop Keyboards", "Router", "Data Cards", "UPS", "USB Gadgets", "Laptop Battery", "Laptop Adapter", "Wireless USB Adapter", "Processor"];

    const mobile = ["All", "Plain Cases", "Designer Cases", "Screen Guards", "Mobile Cable", "Mobile Flash", "Mobile USB Gadget", "Camera Lens Protectors"];

    const television = ["All", "Big Screen TVs", "Smart TVs", "4K UHD TVs", "OLED TVs", "QLED TVs", "Nanocell TVs"];

    const washing = ["All", "Fully Automatic Front Load", "Semi Automatic Top Load", "Fully Automatic Top Load", "Wash Dryers", "Washer Only"];

    const conditioners = ["All", "Inverter ACs", "Split ACs", "Window ACs", "5 Star ACs", "1 Ton ACs", "1.5 Ton ACs"]

    const refrigerators = ["All", "Single Door", "Double Door", "Triple Door", "Side by Side", "4 Door", "Mini Refrigerators"];

    const appliances = ["All", "Irons", "Water Purifiers", "Inverters", "Vaccum Cleaners", "Sewing Machines", "Air Purifiers"];

    const beauty = ["View All","Bath & Oral Care","Personal Hygiene","Eye Makeup","Face Makeup"];

    const grooming = ["View All","Face Washes","Beard Oils","Hair Styling","Shaving Essentials","Soaps"];

    const baby = ["View All","Baby Diapers","Baby Wipes","Baby Bath & Grooming","Baby Food"];

    const sports = ["View All","Badminton","Cricket","Cycling","Football","Fitness Equipments","Supports"];

    const [visible, setvisible] = useState(false);

    return (
        <nav>
            <img src={Logo} alt="logo" />
            <ul>
                <li><div className="btn-group">
                    <p className="dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        PRODUCTS
                    </p>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><a className="dropdown-item" href="/">Fashion &nbsp;&nbsp; &raquo;</a>
                            <ul class="dropdown-menu dropdown-submenu">
                                <li>
                                    <a class="dropdown-item" href="/">Men's Top Wear &nbsp;&nbsp; &raquo;</a>
                                    <ul class="dropdown-menu dropdown-submenu">
                                        {mens.map((value, index) => {
                                            return <li key={index}><a class="dropdown-item" href="/">{value}</a></li>
                                        })}
                                    </ul>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="/">Men's Bottom Wear &nbsp;&nbsp; &raquo;</a>
                                    <ul class="dropdown-menu dropdown-submenu">
                                        {mens2.map((value, index) => {
                                            return <li key={index}><a class="dropdown-item" href="/">{value}</a></li>
                                        })}
                                    </ul>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="/">Women Ethnic &nbsp;&nbsp; &raquo;</a>
                                    <ul class="dropdown-menu dropdown-submenu">
                                        {women.map((value, index) => {
                                            return <li key={index}><a class="dropdown-item" href="/">{value}</a></li>
                                        })}
                                    </ul>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="/">Women Western &nbsp;&nbsp; &raquo;</a>
                                    <ul class="dropdown-menu dropdown-submenu">
                                        {women2.map((value, index) => {
                                            return <li key={index}><a class="dropdown-item" href="/">{value}</a></li>
                                        })}
                                    </ul>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="/">Men Footwear &nbsp;&nbsp; &raquo;</a>
                                    <ul class="dropdown-menu dropdown-submenu">
                                        {mens3.map((value, index) => {
                                            return <li key={index}><a class="dropdown-item" href="/">{value}</a></li>
                                        })}
                                    </ul>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="/">Women Footwear &nbsp;&nbsp; &raquo;</a>
                                    <ul class="dropdown-menu dropdown-submenu">
                                        {womens3.map((value, index) => {
                                            return <li key={index}><a class="dropdown-item" href="/">{value}</a></li>
                                        })}
                                    </ul>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="/">Watches and Accessories &nbsp;&nbsp; &raquo;</a>
                                    <ul class="dropdown-menu dropdown-submenu">
                                        {watches.map((value, index) => {
                                            return <li key={index}><a class="dropdown-item" href="/">{value}</a></li>
                                        })}
                                    </ul>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="/">Bags, Suitcases & Luggage &nbsp;&nbsp; &raquo;</a>
                                    <ul class="dropdown-menu dropdown-submenu">
                                        {bags.map((value, index) => {
                                            return <li key={index}><a class="dropdown-item" href="/">{value}</a></li>
                                        })}
                                    </ul>
                                </li>
                            </ul></li>
                        <li><a className="dropdown-item" href="/">Electronics &nbsp;&nbsp; &raquo;</a>
                            <ul class="dropdown-menu dropdown-submenu">
                                <li>
                                    <a class="dropdown-item" href="/">Audio &nbsp;&nbsp; &raquo;</a>
                                    <ul class="dropdown-menu dropdown-submenu">
                                        {audio.map((value, index) => {
                                            return <li key={index}><a class="dropdown-item" href="/">{value}</a></li>
                                        })}
                                    </ul>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="/">Camera & Accessories &nbsp;&nbsp; &raquo;</a>
                                    <ul class="dropdown-menu dropdown-submenu">
                                        {camera.map((value, index) => {
                                            return <li key={index}><a class="dropdown-item" href="/">{value}</a></li>
                                        })}
                                    </ul>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="/">Laptop Accessories &nbsp;&nbsp; &raquo;</a>
                                    <ul class="dropdown-menu dropdown-submenu">
                                        {laptop.map((value, index) => {
                                            return <li key={index}><a class="dropdown-item" href="/">{value}</a></li>
                                        })}
                                    </ul>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="/">Mobile Accessories &nbsp;&nbsp; &raquo;</a>
                                    <ul class="dropdown-menu dropdown-submenu">
                                        {mobile.map((value, index) => {
                                            return <li key={index}><a class="dropdown-item" href="/">{value}</a></li>
                                        })}
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a className="dropdown-item" href="/">Appliances &nbsp;&nbsp; &raquo;</a>
                            <ul class="dropdown-menu dropdown-submenu">
                                <li>
                                    <a class="dropdown-item" href="/">Television &nbsp;&nbsp; &raquo;</a>
                                    <ul class="dropdown-menu dropdown-submenu">
                                        {television.map((value, index) => {
                                            return <li key={index}><a class="dropdown-item" href="/">{value}</a></li>
                                        })}
                                    </ul>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="/">Washing Machines &nbsp;&nbsp; &raquo;</a>
                                    <ul class="dropdown-menu dropdown-submenu">
                                        {washing.map((value, index) => {
                                            return <li key={index}><a class="dropdown-item" href="/">{value}</a></li>
                                        })}
                                    </ul>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="/">Air Conditioners &nbsp;&nbsp; &raquo;</a>
                                    <ul class="dropdown-menu dropdown-submenu">
                                        {conditioners.map((value, index) => {
                                            return <li key={index}><a class="dropdown-item" href="/">{value}</a></li>
                                        })}
                                    </ul>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="/">Refrigerators &nbsp;&nbsp; &raquo;</a>
                                    <ul class="dropdown-menu dropdown-submenu">
                                        {refrigerators.map((value, index) => {
                                            return <li key={index}><a class="dropdown-item" href="/">{value}</a></li>
                                        })}
                                    </ul>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="/">Home Appliances &nbsp;&nbsp; &raquo;</a>
                                    <ul class="dropdown-menu dropdown-submenu">
                                        {appliances.map((value, index) => {
                                            return <li key={index}><a class="dropdown-item" href="/">{value}</a></li>
                                        })}
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a className="dropdown-item" href="/">Beauty, Toys & More &nbsp;&nbsp; &raquo;</a>
                            <ul class="dropdown-menu dropdown-submenu">
                                <li>
                                    <a class="dropdown-item" href="/">Beauty & Personal Care &nbsp;&nbsp; &raquo;</a>
                                    <ul class="dropdown-menu dropdown-submenu">
                                        {beauty.map((value, index) => {
                                            return <li key={index}><a class="dropdown-item" href="/">{value}</a></li>
                                        })}
                                    </ul>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="/">Men's Grooming &nbsp;&nbsp; &raquo;</a>
                                    <ul class="dropdown-menu dropdown-submenu">
                                        {grooming.map((value, index) => {
                                            return <li key={index}><a class="dropdown-item" href="/">{value}</a></li>
                                        })}
                                    </ul>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="/">Baby Care &nbsp;&nbsp; &raquo;</a>
                                    <ul class="dropdown-menu dropdown-submenu">
                                        {baby.map((value, index) => {
                                            return <li key={index}><a class="dropdown-item" href="/">{value}</a></li>
                                        })}
                                    </ul>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="/">Sports & Fitness &nbsp;&nbsp; &raquo;</a>
                                    <ul class="dropdown-menu dropdown-submenu">
                                        {sports.map((value, index) => {
                                            return <li key={index}><a class="dropdown-item" href="/">{value}</a></li>
                                        })}
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div></li>
                <li><a href='#about'>ABOUT</a></li>
                <li><a href='#contact'>CONTACT</a></li>
            </ul>
            <span onClick={()=>setvisible(true)}>LOGIN / SIGNUP</span>
            {visible===true?<CustomizedDialogs true={true} setvisible={setvisible}/>:null}
        </nav>
    );
}