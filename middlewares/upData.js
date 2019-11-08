const productModel = require("./../models/product.model");

// Middleware này được tạo ra nhằm tự động add 100 document vào products colleciton, thay vì phải làm tay

module.exports = async function(req, res, next) {
    // datas chứa 100 collection
	let datas = [
		{
            "id": "56d9416a-cac0-4090-bd28-ec798f16a410",
            "name": "Pasta - Bauletti, Chicken White",
            "image": "https://loremflickr.com/320/240",
            "description": "hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at"
          },
          {
            "id": "30abeb18-6d7b-473e-9458-cde2e222799e",
            "name": "Cake Circle, Paprus",
            "image": "https://loremflickr.com/320/240",
            "description": "morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit"
          },
          {
            "id": "4d5c66e4-bb34-452e-b460-fd1a9ee3e2a6",
            "name": "Squid Ink",
            "image": "https://loremflickr.com/320/240",
            "description": "duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non"
          },
          {
            "id": "77a3922e-3ef6-442f-8bdf-802440da7cb6",
            "name": "Nantucket - Carrot Orange",
            "image": "https://loremflickr.com/320/240",
            "description": "donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum"
          },
          {
            "id": "09308eb6-7737-4ec2-9d0f-2c263a3a33bf",
            "name": "Bagel - 12 Grain Preslice",
            "image": "https://loremflickr.com/320/240",
            "description": "ornare consequat lectus in est risus auctor sed tristique in"
          },
          {
            "id": "be3d74d7-258d-4894-9c9b-98b866fa3ea5",
            "name": "Pie Shell - 9",
            "image": "https://loremflickr.com/320/240",
            "description": "volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est"
          },
          {
            "id": "b79d11cb-14ed-4db1-a2e4-47d500e5a766",
            "name": "Creme De Menthe Green",
            "image": "https://loremflickr.com/320/240",
            "description": "nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium"
          },
          {
            "id": "b5116839-89e1-426c-a3bd-863179457367",
            "name": "Beer - Creemore",
            "image": "https://loremflickr.com/320/240",
            "description": "metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque"
          },
          {
            "id": "d540023f-914d-482a-a5c6-ac8bb2d654eb",
            "name": "Wine - Riesling Dr. Pauly",
            "image": "https://loremflickr.com/320/240",
            "description": "eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas"
          },
          {
            "id": "fc27c9ff-dad4-4252-811e-65ac2c5c12b1",
            "name": "Bread - Calabrese Baguette",
            "image": "https://loremflickr.com/320/240",
            "description": "viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum"
          },
          {
            "id": "f4d8838d-5fb9-434d-bffa-73eb500bcb9a",
            "name": "Muffin Hinge - 211n",
            "image": "https://loremflickr.com/320/240",
            "description": "sed tincidunt eu felis fusce posuere felis sed lacus morbi sem"
          },
          {
            "id": "2acdf82d-7d7c-44c2-9ac5-501984f1c2c4",
            "name": "Shrimp - 16 - 20 Cooked, Peeled",
            "image": "https://loremflickr.com/320/240",
            "description": "ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices"
          },
          {
            "id": "7956e0a6-3400-451a-a5b3-a45b4103b238",
            "name": "Cumin - Whole",
            "image": "https://loremflickr.com/320/240",
            "description": "enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris"
          },
          {
            "id": "5be9e626-0273-4881-9711-a027124134fe",
            "name": "Apricots Fresh",
            "image": "https://loremflickr.com/320/240",
            "description": "rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede"
          },
          {
            "id": "18bc2d2f-5ab3-49b0-aced-9e08c573d42a",
            "name": "Wine - Black Tower Qr",
            "image": "https://loremflickr.com/320/240",
            "description": "pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum"
          },
          {
            "id": "6b4821e7-44c0-4548-be5d-30f3fefe9e2a",
            "name": "Snapple - Iced Tea Peach",
            "image": "https://loremflickr.com/320/240",
            "description": "habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat"
          },
          {
            "id": "5720d35a-8115-42e5-a8b5-7184eee8f5e3",
            "name": "Pastry - Baked Cinnamon Stick",
            "image": "https://loremflickr.com/320/240",
            "description": "sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi"
          },
          {
            "id": "2a5b0866-1f33-4287-bd08-715db2b804ad",
            "name": "Liners - Banana, Paper",
            "image": "https://loremflickr.com/320/240",
            "description": "elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non"
          },
          {
            "id": "5dc356d2-beed-4cb8-8bc6-9882ab955a77",
            "name": "Beer - Tetleys",
            "image": "https://loremflickr.com/320/240",
            "description": "nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at"
          },
          {
            "id": "234e360d-cbd5-4492-9429-2a5f44b9be59",
            "name": "Lotus Rootlets - Canned",
            "image": "https://loremflickr.com/320/240",
            "description": "aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales"
          },
          {
            "id": "e6aac8d4-95de-4e99-a2da-d1d38094605a",
            "name": "Clams - Littleneck, Whole",
            "image": "https://loremflickr.com/320/240",
            "description": "viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec"
          },
          {
            "id": "8eee6603-b092-4567-944d-47a55b92851f",
            "name": "Chips Potato Swt Chilli Sour",
            "image": "https://loremflickr.com/320/240",
            "description": "hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur"
          },
          {
            "id": "3a192478-c4d4-47d8-b1ab-d36cb13a30dc",
            "name": "Beer - Blue Light",
            "image": "https://loremflickr.com/320/240",
            "description": "magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor"
          },
          {
            "id": "f935b08e-fdae-4d5c-adf5-36625c1a1e1e",
            "name": "Muffin Mix - Chocolate Chip",
            "image": "https://loremflickr.com/320/240",
            "description": "rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut"
          },
          {
            "id": "8e1af078-792e-44be-8b9e-86401d059f42",
            "name": "C - Plus, Orange",
            "image": "https://loremflickr.com/320/240",
            "description": "sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien"
          },
          {
            "id": "4a806624-815d-4b7e-93b8-0f4554a76392",
            "name": "Water - Spring 1.5lit",
            "image": "https://loremflickr.com/320/240",
            "description": "elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis"
          },
          {
            "id": "7fde5c37-e027-4ca7-aa3d-95ae2146d5ae",
            "name": "French Pastry - Mini Chocolate",
            "image": "https://loremflickr.com/320/240",
            "description": "consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum"
          },
          {
            "id": "1cffe8ce-cce5-45e2-9a00-ca6b2c48893e",
            "name": "Pasta - Angel Hair",
            "image": "https://loremflickr.com/320/240",
            "description": "viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum"
          },
          {
            "id": "2e230134-9c37-4c38-8607-23280902b7cd",
            "name": "Juice - Apple Cider",
            "image": "https://loremflickr.com/320/240",
            "description": "velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam"
          },
          {
            "id": "940d5f5d-800d-4dba-87ae-66c12fdc8d49",
            "name": "Cheese - Perron Cheddar",
            "image": "https://loremflickr.com/320/240",
            "description": "sed accumsan felis ut at dolor quis odio consequat varius integer"
          },
          {
            "id": "d8cf2b3e-2d8a-4248-b7c7-85a6064bc6bc",
            "name": "Olives - Black, Pitted",
            "image": "https://loremflickr.com/320/240",
            "description": "nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper"
          },
          {
            "id": "8120b5a1-1933-4b10-a40c-5c4912a85e28",
            "name": "Turkey - Breast, Double",
            "image": "https://loremflickr.com/320/240",
            "description": "nulla tempus vivamus in felis eu sapien cursus vestibulum proin"
          },
          {
            "id": "a6b8a252-29f7-41f9-baa1-66a258786090",
            "name": "Chocolate - White",
            "image": "https://loremflickr.com/320/240",
            "description": "eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus"
          },
          {
            "id": "73917b54-d297-4a83-9a32-ab1e7a906f36",
            "name": "Tart Shells - Barquettes, Savory",
            "image": "https://loremflickr.com/320/240",
            "description": "ante vestibulum ante ipsum primis in faucibus orci luctus et"
          },
          {
            "id": "e30d0620-640f-4caa-8ae0-570d537e26b4",
            "name": "Pate - Cognac",
            "image": "https://loremflickr.com/320/240",
            "description": "venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet"
          },
          {
            "id": "b3b39368-e69a-4f5b-882b-c150301994ae",
            "name": "Water - Evian 355 Ml",
            "image": "https://loremflickr.com/320/240",
            "description": "dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat"
          },
          {
            "id": "0463f6e2-65e8-4e70-bca6-d2cb5c9124ac",
            "name": "Cheese - Ricotta",
            "image": "https://loremflickr.com/320/240",
            "description": "a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna"
          },
          {
            "id": "37074689-4ae9-4aad-aa7a-82d1b38b341f",
            "name": "Soup - Campbells - Chicken Noodle",
            "image": "https://loremflickr.com/320/240",
            "description": "a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in"
          },
          {
            "id": "9890b1be-80f6-497c-b449-9322e46ad4c4",
            "name": "Trout Rainbow Whole",
            "image": "https://loremflickr.com/320/240",
            "description": "sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam"
          },
          {
            "id": "d8d42ec5-c5ac-4fd3-8382-41dcc552847a",
            "name": "Turnip - Mini",
            "image": "https://loremflickr.com/320/240",
            "description": "hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum"
          },
          {
            "id": "fe26eadb-5a3e-4e38-96a3-a433a680c520",
            "name": "Waffle Stix",
            "image": "https://loremflickr.com/320/240",
            "description": "pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et"
          },
          {
            "id": "8da7f931-7527-4300-94c3-a203247be6c5",
            "name": "Hickory Smoke, Liquid",
            "image": "https://loremflickr.com/320/240",
            "description": "sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus"
          },
          {
            "id": "c688ee12-04c4-4323-87e1-9ad1219dfe5b",
            "name": "Parasol Pick Stir Stick",
            "image": "https://loremflickr.com/320/240",
            "description": "ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices"
          },
          {
            "id": "b9cd3d75-3d61-492c-9247-b1f8c847259a",
            "name": "Bag - Regular Kraft 20 Lb",
            "image": "https://loremflickr.com/320/240",
            "description": "ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras"
          },
          {
            "id": "7f5f0ff0-98fc-4b0b-ba8a-7390f5dd6c75",
            "name": "Jam - Raspberry",
            "image": "https://loremflickr.com/320/240",
            "description": "mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit"
          },
          {
            "id": "7003052b-b269-434f-9565-51befdcc3760",
            "name": "Beef - Outside, Round",
            "image": "https://loremflickr.com/320/240",
            "description": "eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat"
          },
          {
            "id": "796877ca-2590-4d20-b143-2bc64b315d8a",
            "name": "Nori Sea Weed",
            "image": "https://loremflickr.com/320/240",
            "description": "maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi"
          },
          {
            "id": "27d04021-753b-44d9-a53c-876630860fe2",
            "name": "Brocolinni - Gaylan, Chinese",
            "image": "https://loremflickr.com/320/240",
            "description": "ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam"
          },
          {
            "id": "d38eced7-9e77-4ea7-a96d-bb8b1d324efd",
            "name": "Parsley - Fresh",
            "image": "https://loremflickr.com/320/240",
            "description": "ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc"
          },
          {
            "id": "2fa7cda2-5529-4361-9fc8-ffefe02ae474",
            "name": "Snapple - Iced Tea Peach",
            "image": "https://loremflickr.com/320/240",
            "description": "nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel"
          },
          {
            "id": "9f0d6827-30a1-4b2f-9568-6ffdaea84369",
            "name": "Tart Shells - Savory, 3",
            "image": "https://loremflickr.com/320/240",
            "description": "lobortis vel dapibus at diam nam tristique tortor eu pede"
          },
          {
            "id": "cb4ae870-06c6-4865-9b0f-26aaa65baa6c",
            "name": "Thyme - Fresh",
            "image": "https://loremflickr.com/320/240",
            "description": "in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec"
          },
          {
            "id": "4d04ba67-a2d1-4bff-98e5-17d629db8a7f",
            "name": "Lettuce - Radicchio",
            "image": "https://loremflickr.com/320/240",
            "description": "at lorem integer tincidunt ante vel ipsum praesent blandit lacinia"
          },
          {
            "id": "3bc5e43f-df95-4373-8902-75053f8e4fe2",
            "name": "Wine - Duboeuf Beaujolais",
            "image": "https://loremflickr.com/320/240",
            "description": "proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing"
          },
          {
            "id": "a687c59b-371b-4734-9e69-492dd81c2121",
            "name": "Glucose",
            "image": "https://loremflickr.com/320/240",
            "description": "phasellus sit amet erat nulla tempus vivamus in felis eu sapien"
          },
          {
            "id": "a748923a-200a-49e0-a89c-fb1ef2f2748b",
            "name": "Berry Brulee",
            "image": "https://loremflickr.com/320/240",
            "description": "id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum"
          },
          {
            "id": "319971c0-103f-4a62-9d20-8ebddf6ea00f",
            "name": "Sponge Cake Mix - Chocolate",
            "image": "https://loremflickr.com/320/240",
            "description": "in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque"
          },
          {
            "id": "6c94e119-ea29-4c6d-859f-930bfea1140f",
            "name": "Sauce - Plum",
            "image": "https://loremflickr.com/320/240",
            "description": "ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam"
          },
          {
            "id": "d3236e9e-595d-4754-93b8-60a870dccb74",
            "name": "Wine - Merlot Vina Carmen",
            "image": "https://loremflickr.com/320/240",
            "description": "condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit"
          },
          {
            "id": "da9c3869-5d53-4ad3-bc6d-ed3f7ac24526",
            "name": "Beans - Fine",
            "image": "https://loremflickr.com/320/240",
            "description": "at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate"
          },
          {
            "id": "cf7fde63-9276-48c2-9877-7faf3bae7254",
            "name": "Sardines",
            "image": "https://loremflickr.com/320/240",
            "description": "nam congue risus semper porta volutpat quam pede lobortis ligula sit amet"
          },
          {
            "id": "3092be3e-fdde-4ef1-b4f6-3785955efcc2",
            "name": "Cheese - Manchego, Spanish",
            "image": "https://loremflickr.com/320/240",
            "description": "mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies"
          },
          {
            "id": "af0ebf8e-6cbd-4a63-9ea3-05308800cfa1",
            "name": "Beef - Striploin",
            "image": "https://loremflickr.com/320/240",
            "description": "condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales"
          },
          {
            "id": "c7d6ae63-a481-45fe-a944-0075f2c769c5",
            "name": "Syrup - Monin - Passion Fruit",
            "image": "https://loremflickr.com/320/240",
            "description": "ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi"
          },
          {
            "id": "fbde6ce3-4fd6-42de-ab5f-5ba99e6c0a5e",
            "name": "Wine - Red, Colio Cabernet",
            "image": "https://loremflickr.com/320/240",
            "description": "pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu"
          },
          {
            "id": "dfc07f05-e53e-436e-aa82-2722a9051cd5",
            "name": "Liqueur - Melon",
            "image": "https://loremflickr.com/320/240",
            "description": "lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat"
          },
          {
            "id": "e357e291-e88e-40e1-90ef-8fcd07956d2b",
            "name": "Roe - Flying Fish",
            "image": "https://loremflickr.com/320/240",
            "description": "nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis"
          },
          {
            "id": "5e5ef6b8-9d79-4470-a953-d3012783357d",
            "name": "Muffin - Bran Ind Wrpd",
            "image": "https://loremflickr.com/320/240",
            "description": "a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit"
          },
          {
            "id": "468c0191-45c1-42a1-a71e-0d4a5048558d",
            "name": "Garlic - Primerba, Paste",
            "image": "https://loremflickr.com/320/240",
            "description": "consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien"
          },
          {
            "id": "73e4a18b-4bd3-4634-a13e-eca0d9944ab6",
            "name": "Pasta - Penne, Rigate, Dry",
            "image": "https://loremflickr.com/320/240",
            "description": "nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit"
          },
          {
            "id": "a580be84-63c7-44d2-a5be-e68e8fc2397c",
            "name": "Pasta - Agnolotti - Butternut",
            "image": "https://loremflickr.com/320/240",
            "description": "turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem"
          },
          {
            "id": "705bf750-e60f-4cc3-8ef6-ff1364b391b0",
            "name": "Plate Pie Foil",
            "image": "https://loremflickr.com/320/240",
            "description": "sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium"
          },
          {
            "id": "b606dd9c-efc9-4266-a61c-d8f796aca313",
            "name": "Flower - Daisies",
            "image": "https://loremflickr.com/320/240",
            "description": "fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel"
          },
          {
            "id": "51c60ef7-eaa3-4d82-a8d0-668564b9acaa",
            "name": "Nut - Peanut, Roasted",
            "image": "https://loremflickr.com/320/240",
            "description": "id luctus nec molestie sed justo pellentesque viverra pede ac"
          },
          {
            "id": "b2cfcf61-8439-427e-b823-32b130a22d7d",
            "name": "Wine - Delicato Merlot",
            "image": "https://loremflickr.com/320/240",
            "description": "libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed"
          },
          {
            "id": "1b5186f9-8e51-4bf7-8e6e-fc4192b0432f",
            "name": "Soup - Campbells Broccoli",
            "image": "https://loremflickr.com/320/240",
            "description": "quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse"
          },
          {
            "id": "e666ab5e-5fb2-4eca-a3bc-32226a1dacc0",
            "name": "Pastry - Banana Muffin - Mini",
            "image": "https://loremflickr.com/320/240",
            "description": "integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio"
          },
          {
            "id": "5cb04031-b79d-46da-bea8-80234cb90378",
            "name": "Longos - Grilled Veg Sandwiches",
            "image": "https://loremflickr.com/320/240",
            "description": "erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien"
          },
          {
            "id": "f509a6bc-d128-43d6-9266-e241196bdf2d",
            "name": "Lettuce - Curly Endive",
            "image": "https://loremflickr.com/320/240",
            "description": "sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor"
          },
          {
            "id": "1f153e2c-e378-4805-ad3c-7de92f846e58",
            "name": "Beets - Golden",
            "image": "https://loremflickr.com/320/240",
            "description": "dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer"
          },
          {
            "id": "6beddd6e-2012-4c87-863c-4f8b22c10742",
            "name": "Trout - Rainbow, Fresh",
            "image": "https://loremflickr.com/320/240",
            "description": "pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam"
          },
          {
            "id": "9f026521-0a39-42e8-a928-e04ac55b2061",
            "name": "Lobster - Canned Premium",
            "image": "https://loremflickr.com/320/240",
            "description": "at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem"
          },
          {
            "id": "ffa84e66-0551-43c6-a913-ba9d4ddcb54b",
            "name": "Shrimp - Black Tiger 26/30",
            "image": "https://loremflickr.com/320/240",
            "description": "molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est"
          },
          {
            "id": "522c1eb4-19bb-4c2c-b1b6-72a2e45b6139",
            "name": "Scrubbie - Scotchbrite Hand Pad",
            "image": "https://loremflickr.com/320/240",
            "description": "pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis"
          },
          {
            "id": "5096b2c1-9ca4-41cc-bd8e-aeef3b24b63b",
            "name": "Sugar - Brown",
            "image": "https://loremflickr.com/320/240",
            "description": "eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam"
          },
          {
            "id": "958360ca-dca7-4988-918b-27ceb6f6ff7d",
            "name": "Stock - Veal, Brown",
            "image": "https://loremflickr.com/320/240",
            "description": "nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede"
          },
          {
            "id": "d58cf1cf-73b3-4cef-9351-a40a8a97a2a7",
            "name": "Longos - Cheese Tortellini",
            "image": "https://loremflickr.com/320/240",
            "description": "ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue"
          },
          {
            "id": "0e656876-2fb0-4448-92f3-d95274dd8e5c",
            "name": "Salt And Pepper Mix - White",
            "image": "https://loremflickr.com/320/240",
            "description": "nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy"
          },
          {
            "id": "d91e95fb-207c-4f83-b0d1-76973b5d9d18",
            "name": "Yogurt - Strawberry, 175 Gr",
            "image": "https://loremflickr.com/320/240",
            "description": "arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula"
          },
          {
            "id": "9baff186-fa80-4b3f-ab52-1281a9dedceb",
            "name": "Whmis Spray Bottle Graduated",
            "image": "https://loremflickr.com/320/240",
            "description": "duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat"
          },
          {
            "id": "541ac4f2-7133-45f7-9274-d83ba69f4560",
            "name": "Juice - Cranberry 284ml",
            "image": "https://loremflickr.com/320/240",
            "description": "mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus"
          },
          {
            "id": "17590e10-566e-47f1-8f20-53287edc8eda",
            "name": "Wine - Chenin Blanc K.w.v.",
            "image": "https://loremflickr.com/320/240",
            "description": "mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus"
          },
          {
            "id": "8d61e0b5-e8e6-43ac-a223-0d0ab3c57d33",
            "name": "Teriyaki Sauce",
            "image": "https://loremflickr.com/320/240",
            "description": "phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in"
          },
          {
            "id": "1bfc8b9f-9a4c-475b-b55b-732ed4ad1ec7",
            "name": "Pea - Snow",
            "image": "https://loremflickr.com/320/240",
            "description": "consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis"
          },
          {
            "id": "90d3a778-6f03-421d-ae71-b25d512572d8",
            "name": "Wine - Domaine Boyar Royal",
            "image": "https://loremflickr.com/320/240",
            "description": "tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus"
          },
          {
            "id": "780a4262-55aa-4511-9486-fda189f2414b",
            "name": "Mushrooms - Black, Dried",
            "image": "https://loremflickr.com/320/240",
            "description": "aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque"
          },
          {
            "id": "c8b1d031-0ca2-401d-9f1e-60de26dc3927",
            "name": "Wine - Jafflin Bourgongone",
            "image": "https://loremflickr.com/320/240",
            "description": "eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus"
          },
          {
            "id": "1748c361-42df-4a6f-a831-858df59ac0c6",
            "name": "Bread Cranberry Foccacia",
            "image": "https://loremflickr.com/320/240",
            "description": "dui vel nisl duis ac nibh fusce lacus purus aliquet at"
          },
          {
            "id": "de78f58c-2f9e-45a2-8f65-d773414e1d86",
            "name": "Corn - Cream, Canned",
            "image": "https://loremflickr.com/320/240",
            "description": "non quam nec dui luctus rutrum nulla tellus in sagittis dui vel"
          },
          {
            "id": "4f95f9db-7c6a-44a3-b1b2-1cf0ffa34afa",
            "name": "Bonito Flakes - Toku Katsuo",
            "image": "https://loremflickr.com/320/240",
            "description": "in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna"
          }
	];

	for (let data of datas) {
		let doc = new productModel({
			name: data.name,
			image: data.image,
			description: data.description
		});
		await doc.save();
	}

	next();
};
