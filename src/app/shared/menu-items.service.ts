import { MenuItem } from "./menu-item.model";

export class MenuItemService {
    featuredItems: MenuItem[] = [
        new MenuItem('https://www.redrobin.com/tavern-menu/jcr:content/centerParsys/responsivegrid/responsivegrid_826483054/responsivegrid_copy_2131621308/image_258938782.img.jpg', 'Big Jay', '1 Sesame Seed Bun, 2 Beef Patties, Tomatoe, Lettuce, Onion, Ketchup & Mustard', 4),
        new MenuItem('http://tiphero.com/wp-content/uploads/2017/03/Still_3_Baked_BBQ_Ribs.jpg', 'BBQ Ribs', 'Lean juicy pork ribs, seasoned with Big Jay\'s special rub, slowly smoked, and then grilled & basted with our homemade BBQ sauce', 8),
        new MenuItem('https://www.bigbearswife.com/wp-content/uploads/2012/09/HoneyBBQWingsandCoolRanch_zpsaf1e912a.jpg', 'BBQ Wings', 'Crispy baked honey BBQ wings', 4),
        new MenuItem('http://howtobbqright.com/wp-content/uploads/2017/08/RFI_burntends.jpg', 'Brisket Burnt Ends', 'Our signature burnt ends and hickory pit beans served over sweet cornbread with fried onion straws', 7),
        new MenuItem('https://static01.nyt.com/images/2014/04/16/dining/16JPEASTER2/16JPEASTER2-articleLarge.jpg', 'Baked Beans', 'Enjoy some old-fashioned American baked beans', 2),
        new MenuItem('https://enthusiasts.ciachef.edu/uploadedImages/Content/Recipes/740x540_f_pulled-pork.jpg', 'Pulled Pork', 'Pulled pork with Big Jay\'s BBQ sauce, and a side of your choice from the following: baked beans, coleslaw, or mashed potatoes.', 5)
    ];
    dessert: MenuItem[] = [
        new MenuItem('x', 'Double Chocolate', 'Rich, fudgy chocolate cake filled and frosted with our house chocolate buttercream.', 2.75),
        new MenuItem('x', 'Zebra', 'Alternating layers of vanilla almond and chocolate cakes, filled and frosted with our house vanilla buttercream.', 2.75),
        new MenuItem('x', 'Red Velvet', 'One of our most popular cakes, our red velvet is always moist and dense with a light chocolate flavor.', 2.99),
        new MenuItem('x', 'Peanut Butter Cup', 'Moist, fudgy chocolate cake, filled and frosted with our creamy peanut butter buttercream.', 2)
    ];

    getDessert() {
        return this.dessert.slice();
    }

    getFeaturedItems() {
        return this.featuredItems.slice();
    }
}