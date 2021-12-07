const data = {
    customers: [
        {
            "customer_id": "0001",
            "firstName": "Lionel",
            "lastName": "Messi",
            "phoneNumber": "+1 (990)011-2345",
            "emailAddress": "lionel.messi@gmail.com",
            "orders": [
                {
                    "order_id": "10001",
                    "category": "sports",
                    "product": "football",
                    "product_name": "ELYSIA",
                    "cost": "$200",
                    "place": "Paris",
                    "shipment": true,
                    "purchase_date": "12/05/2021",
                    "delivery_date": "12/10/2021",
                    "delivery_status": false
                },
                {
                    "order_id": "10002",
                    "category": "clothes",
                    "product": "football jersey",
                    "product_name": "PSG official jersey",
                    "cost": "$250",
                    "place": "Paris",
                    "shipment": true,
                    "purchase_date": "11/25/2021",
                    "delivery_date": "11/30/2021",
                    "delivery_status": true
                },
                {
                    "order_id": "10003",
                    "category": "nutrition",
                    "product": "Creatine",
                    "product_name": "Optimum Nutrition Micronized Creatine Powder",
                    "cost": "$40",
                    "place": "Paris",
                    "shipment": true,
                    "purchase_date": "11/15/2021",
                    "delivery_date": "11/20/2021",
                    "delivery_status": true
                }
            ]
        },
        {
            "customer_id": "0002",
            "firstName": "Kendrick",
            "lastName": "Lamar",
            "phoneNumber": "+1 (990)012-2345",
            "emailAddress": "kendrick.lamar@gmail.com",
            "orders": [
                {
                    "order_id": "10004",
                    "category": "electronics",
                    "product": "laptop",
                    "product_name": "Apple MAC book pro",
                    "cost": "$2500",
                    "place": "California",
                    "shipment": true,
                    "purchase_date": "12/02/2021",
                    "delivery_date": "12/03/2021",
                    "delivery_status": true
                },
                {
                    "order_id": "10005",
                    "category": "clothes",
                    "product": "men shirt",
                    "product_name": "Michael Kors t-Shirt",
                    "cost": "$140",
                    "place": "California",
                    "shipment": true,
                    "purchase_date": "11/22/2021",
                    "delivery_date": "11/27/2021",
                    "delivery_status": true
                },
                {
                    "order_id": "10006",
                    "category": "food",
                    "product": "beef",
                    "product_name": "100% Ground feed beef",
                    "cost": "$100",
                    "place": "California",
                    "shipment": true,
                    "purchase_date": "11/12/2021",
                    "delivery_date": "11/17/2021",
                    "delivery_status": true
                }
            ]
        },
        {
            "customer_id": "0003",
            "firstName": "Neil",
            "lastName": "deGrasse Tyson",
            "phoneNumber": "+1 (990)013-2345",
            "emailAddress": "neil.d.tyson@gmail.com",
            "orders": [
                {
                    "order_id": "10007",
                    "category": "non-fictional books",
                    "product": "book",
                    "product_name": "Astrophysics for people in a hurry",
                    "cost": "$10",
                    "place": "New York",
                    "shipment": true,
                    "purchase_date": "12/01/2021",
                    "delivery_date": "12/01/2021",
                    "delivery_status": true
                },
                {
                    "order_id": "10008",
                    "category": "beauty products",
                    "product": "perfume",
                    "product_name": "Armani beauty di gio",
                    "cost": "$100",
                    "place": "New York",
                    "shipment": false,
                    "purchase_date": "12/02/2021",
                    "delivery_date": "12/10/2021",
                    "delivery_status": false
                },
                {
                    "order_id": "10009",
                    "category": "recreation",
                    "product": "console",
                    "product_name": "PS5",
                    "cost": "$1024",
                    "place": "New York",
                    "shipment": true,
                    "purchase_date": "12/05/2021",
                    "delivery_date": "12/12/2021",
                    "delivery_status": false
                }
            ]
        },
        {
            "customer_id": "0004",
            "firstName": "Elon",
            "lastName": "Musk",
            "phoneNumber": "+1 (990)014-2345",
            "emailAddress": "elon.musk@gmail.com",
            "orders": [
                {
                    "order_id": "10010",
                    "category": "electronics",
                    "product": "raspberry pi",
                    "product_name": "raspberry pi 4 8gb",
                    "cost": "$100",
                    "place": "Texas",
                    "shipment": true,
                    "purchase_date": "11/30/2021",
                    "delivery_date": "12/06/2021",
                    "delivery_status": false
                },
                {
                    "order_id": "10011",
                    "category": "electronics",
                    "product": "laptop",
                    "product_name": "Alienware",
                    "cost": "$2000",
                    "place": "Texas",
                    "shipment": false,
                    "purchase_date": "12/05/2021",
                    "delivery_date": "12/07/2021",
                    "delivery_status": false
                },
                {
                    "order_id": "10012",
                    "category": "electronics",
                    "product": "graphic card",
                    "product_name": "RTX 3090",
                    "cost": "$4000",
                    "place": "Texas",
                    "shipment": false,
                    "purchase_date": "12/04/2021",
                    "delivery_date": "12/14/2021",
                    "delivery_status": false
                }
            ]
        }
    ]
}

module.exports = data;