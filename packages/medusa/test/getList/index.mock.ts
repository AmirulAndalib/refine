import nock from "nock";

nock("https://refine-example-storefront.herokuapp.com:443", {
  encodedQueryParams: true,
})
  .get("/store/products")
  .query({ limit: "10", offset: "0" })
  .reply(
    200,
    {
      products: [
        {
          id: "prod_01G79W225BGTG4DD3GAZ26DTGS",
          created_at: "2022-07-06T13:44:11.005Z",
          updated_at: "2022-07-06T13:44:11.005Z",
          deleted_at: null,
          title: "Medusa Coffee Mug",
          subtitle: null,
          description: "Every programmer's best friend.",
          handle: "coffee-mug",
          is_giftcard: false,
          status: "published",
          thumbnail:
            "https://medusa-public-images.s3.eu-west-1.amazonaws.com/coffee-mug.png",
          profile_id: "sp_01G79TC1JRFMCE719R8XN61CKC",
          weight: 400,
          length: null,
          height: null,
          width: null,
          hs_code: null,
          origin_country: null,
          mid_code: null,
          material: null,
          collection_id: null,
          type_id: null,
          discountable: true,
          external_id: null,
          metadata: null,
          variants: [
            {
              id: "variant_01G79W225ZB3VHEKTJA54GQXBP",
              created_at: "2022-07-06T13:44:11.005Z",
              updated_at: "2022-07-06T13:44:11.005Z",
              deleted_at: null,
              title: "One Size",
              product_id: "prod_01G79W225BGTG4DD3GAZ26DTGS",
              sku: null,
              barcode: null,
              ean: null,
              upc: null,
              inventory_quantity: 100,
              allow_backorder: false,
              manage_inventory: true,
              hs_code: null,
              origin_country: null,
              mid_code: null,
              material: null,
              weight: null,
              length: null,
              height: null,
              width: null,
              metadata: null,
              options: [
                {
                  id: "optval_01G79W225Z8SYX96YRSWP356F4",
                  created_at: "2022-07-06T13:44:11.005Z",
                  updated_at: "2022-07-06T13:44:11.005Z",
                  deleted_at: null,
                  value: "One Size",
                  option_id: "opt_01G79W225GT42QBAYHR2RBEHVB",
                  variant_id: "variant_01G79W225ZB3VHEKTJA54GQXBP",
                  metadata: null,
                },
              ],
              prices: [
                {
                  id: "ma_01G79W2264TVHR328WJ39BGKG6",
                  created_at: "2022-07-06T13:44:11.005Z",
                  updated_at: "2022-07-06T13:44:11.005Z",
                  deleted_at: null,
                  currency_code: "eur",
                  amount: 1000,
                  min_quantity: null,
                  max_quantity: null,
                  price_list_id: null,
                  variant_id: "variant_01G79W225ZB3VHEKTJA54GQXBP",
                  region_id: null,
                  price_list: null,
                },
                {
                  id: "ma_01G79W22681VQRM9BM8FKZVDGB",
                  created_at: "2022-07-06T13:44:11.005Z",
                  updated_at: "2022-07-06T13:44:11.005Z",
                  deleted_at: null,
                  currency_code: "usd",
                  amount: 1200,
                  min_quantity: null,
                  max_quantity: null,
                  price_list_id: null,
                  variant_id: "variant_01G79W225ZB3VHEKTJA54GQXBP",
                  region_id: null,
                  price_list: null,
                },
              ],
              original_price: null,
              calculated_price: null,
            },
          ],
          options: [
            {
              id: "opt_01G79W225GT42QBAYHR2RBEHVB",
              created_at: "2022-07-06T13:44:11.005Z",
              updated_at: "2022-07-06T13:44:11.005Z",
              deleted_at: null,
              title: "Size",
              product_id: "prod_01G79W225BGTG4DD3GAZ26DTGS",
              metadata: null,
              values: [
                {
                  id: "optval_01G79W225Z8SYX96YRSWP356F4",
                  created_at: "2022-07-06T13:44:11.005Z",
                  updated_at: "2022-07-06T13:44:11.005Z",
                  deleted_at: null,
                  value: "One Size",
                  option_id: "opt_01G79W225GT42QBAYHR2RBEHVB",
                  variant_id: "variant_01G79W225ZB3VHEKTJA54GQXBP",
                  metadata: null,
                },
              ],
            },
          ],
          images: [
            {
              id: "img_01G79W225B92HP2D6VRJN8ANJT",
              created_at: "2022-07-06T13:44:11.005Z",
              updated_at: "2022-07-06T13:44:11.005Z",
              deleted_at: null,
              url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/coffee-mug.png",
              metadata: null,
            },
          ],
          tags: [],
          collection: null,
          type: null,
        },
        {
          id: "prod_01G79W21Y2X62MSX7F62Z2K1GR",
          created_at: "2022-07-06T13:44:11.005Z",
          updated_at: "2022-07-14T13:30:26.367Z",
          deleted_at: null,
          title: "Medusa Hoodie",
          subtitle: null,
          description:
            "Reimagine the feeling of a classic hoodie. With our cotton hoodie, everyday essentials no longer have to be ordinary.",
          handle: "hoodie",
          is_giftcard: false,
          status: "published",
          thumbnail:
            "https://medusa-public-images.s3.eu-west-1.amazonaws.com/black_hoodie_front.png",
          profile_id: "sp_01G79TC1JRFMCE719R8XN61CKC",
          weight: 400,
          length: null,
          height: null,
          width: null,
          hs_code: "",
          origin_country: null,
          mid_code: "",
          material: null,
          collection_id: "pcol_01G7YEBHSSJQ6M5MY09BS8VEB5",
          type_id: null,
          discountable: true,
          external_id: null,
          metadata: null,
          variants: [
            {
              id: "variant_01G79W21Z23GFN6N835KK1JZ4C",
              created_at: "2022-07-06T13:44:11.005Z",
              updated_at: "2022-07-06T13:44:11.005Z",
              deleted_at: null,
              title: "S",
              product_id: "prod_01G79W21Y2X62MSX7F62Z2K1GR",
              sku: null,
              barcode: null,
              ean: null,
              upc: null,
              inventory_quantity: 100,
              allow_backorder: false,
              manage_inventory: true,
              hs_code: null,
              origin_country: null,
              mid_code: null,
              material: null,
              weight: null,
              length: null,
              height: null,
              width: null,
              metadata: null,
              options: [
                {
                  id: "optval_01G79W21Z2QJ8JRAMARJ6YJJ84",
                  created_at: "2022-07-06T13:44:11.005Z",
                  updated_at: "2022-07-06T13:44:11.005Z",
                  deleted_at: null,
                  value: "S",
                  option_id: "opt_01G79W21YA27KTJP8QKAXHXJNV",
                  variant_id: "variant_01G79W21Z23GFN6N835KK1JZ4C",
                  metadata: null,
                },
              ],
              prices: [
                {
                  id: "ma_01G79W21Z93VYJSRD817TBXW7N",
                  created_at: "2022-07-06T13:44:11.005Z",
                  updated_at: "2022-07-06T13:44:11.005Z",
                  deleted_at: null,
                  currency_code: "eur",
                  amount: 3650,
                  min_quantity: null,
                  max_quantity: null,
                  price_list_id: null,
                  variant_id: "variant_01G79W21Z23GFN6N835KK1JZ4C",
                  region_id: null,
                  price_list: null,
                },
                {
                  id: "ma_01G79W21ZDMB572K9HHCQY2J25",
                  created_at: "2022-07-06T13:44:11.005Z",
                  updated_at: "2022-07-06T13:44:11.005Z",
                  deleted_at: null,
                  currency_code: "usd",
                  amount: 4150,
                  min_quantity: null,
                  max_quantity: null,
                  price_list_id: null,
                  variant_id: "variant_01G79W21Z23GFN6N835KK1JZ4C",
                  region_id: null,
                  price_list: null,
                },
              ],
              original_price: null,
              calculated_price: null,
            },
            {
              id: "variant_01G79W21ZTW152NM1QCW2W8J0Y",
              created_at: "2022-07-06T13:44:11.005Z",
              updated_at: "2022-07-06T13:44:11.005Z",
              deleted_at: null,
              title: "M",
              product_id: "prod_01G79W21Y2X62MSX7F62Z2K1GR",
              sku: null,
              barcode: null,
              ean: null,
              upc: null,
              inventory_quantity: 100,
              allow_backorder: false,
              manage_inventory: true,
              hs_code: null,
              origin_country: null,
              mid_code: null,
              material: null,
              weight: null,
              length: null,
              height: null,
              width: null,
              metadata: null,
              options: [
                {
                  id: "optval_01G79W21ZTET99PDP96Z46E5P8",
                  created_at: "2022-07-06T13:44:11.005Z",
                  updated_at: "2022-07-06T13:44:11.005Z",
                  deleted_at: null,
                  value: "M",
                  option_id: "opt_01G79W21YA27KTJP8QKAXHXJNV",
                  variant_id: "variant_01G79W21ZTW152NM1QCW2W8J0Y",
                  metadata: null,
                },
              ],
              prices: [
                {
                  id: "ma_01G79W21ZZG8ZWAPXX91PTF95Q",
                  created_at: "2022-07-06T13:44:11.005Z",
                  updated_at: "2022-07-06T13:44:11.005Z",
                  deleted_at: null,
                  currency_code: "eur",
                  amount: 3650,
                  min_quantity: null,
                  max_quantity: null,
                  price_list_id: null,
                  variant_id: "variant_01G79W21ZTW152NM1QCW2W8J0Y",
                  region_id: null,
                  price_list: null,
                },
                {
                  id: "ma_01G79W2202CXPM1C013AN2VVVC",
                  created_at: "2022-07-06T13:44:11.005Z",
                  updated_at: "2022-07-06T13:44:11.005Z",
                  deleted_at: null,
                  currency_code: "usd",
                  amount: 4150,
                  min_quantity: null,
                  max_quantity: null,
                  price_list_id: null,
                  variant_id: "variant_01G79W21ZTW152NM1QCW2W8J0Y",
                  region_id: null,
                  price_list: null,
                },
              ],
              original_price: null,
              calculated_price: null,
            },
            {
              id: "variant_01G79W220E9ST41D1JG9XKGW89",
              created_at: "2022-07-06T13:44:11.005Z",
              updated_at: "2022-07-06T13:44:11.005Z",
              deleted_at: null,
              title: "L",
              product_id: "prod_01G79W21Y2X62MSX7F62Z2K1GR",
              sku: null,
              barcode: null,
              ean: null,
              upc: null,
              inventory_quantity: 100,
              allow_backorder: false,
              manage_inventory: true,
              hs_code: null,
              origin_country: null,
              mid_code: null,
              material: null,
              weight: null,
              length: null,
              height: null,
              width: null,
              metadata: null,
              options: [
                {
                  id: "optval_01G79W220FM4BFFQ1JEDCQ2QN1",
                  created_at: "2022-07-06T13:44:11.005Z",
                  updated_at: "2022-07-06T13:44:11.005Z",
                  deleted_at: null,
                  value: "L",
                  option_id: "opt_01G79W21YA27KTJP8QKAXHXJNV",
                  variant_id: "variant_01G79W220E9ST41D1JG9XKGW89",
                  metadata: null,
                },
              ],
              prices: [
                {
                  id: "ma_01G79W220NX0N759VCA8M7ZRQF",
                  created_at: "2022-07-06T13:44:11.005Z",
                  updated_at: "2022-07-06T13:44:11.005Z",
                  deleted_at: null,
                  currency_code: "eur",
                  amount: 3650,
                  min_quantity: null,
                  max_quantity: null,
                  price_list_id: null,
                  variant_id: "variant_01G79W220E9ST41D1JG9XKGW89",
                  region_id: null,
                  price_list: null,
                },
                {
                  id: "ma_01G79W220SWFA2KSBDSD9XQ45G",
                  created_at: "2022-07-06T13:44:11.005Z",
                  updated_at: "2022-07-06T13:44:11.005Z",
                  deleted_at: null,
                  currency_code: "usd",
                  amount: 4150,
                  min_quantity: null,
                  max_quantity: null,
                  price_list_id: null,
                  variant_id: "variant_01G79W220E9ST41D1JG9XKGW89",
                  region_id: null,
                  price_list: null,
                },
              ],
              original_price: null,
              calculated_price: null,
            },
            {
              id: "variant_01G79W22173DVWVBDPPVDMR3E3",
              created_at: "2022-07-06T13:44:11.005Z",
              updated_at: "2022-07-06T13:44:11.005Z",
              deleted_at: null,
              title: "XL",
              product_id: "prod_01G79W21Y2X62MSX7F62Z2K1GR",
              sku: null,
              barcode: null,
              ean: null,
              upc: null,
              inventory_quantity: 100,
              allow_backorder: false,
              manage_inventory: true,
              hs_code: null,
              origin_country: null,
              mid_code: null,
              material: null,
              weight: null,
              length: null,
              height: null,
              width: null,
              metadata: null,
              options: [
                {
                  id: "optval_01G79W221875NV4CVY38NMJFHP",
                  created_at: "2022-07-06T13:44:11.005Z",
                  updated_at: "2022-07-06T13:44:11.005Z",
                  deleted_at: null,
                  value: "XL",
                  option_id: "opt_01G79W21YA27KTJP8QKAXHXJNV",
                  variant_id: "variant_01G79W22173DVWVBDPPVDMR3E3",
                  metadata: null,
                },
              ],
              prices: [
                {
                  id: "ma_01G79W221DYP1FP0E6AQ5NHB5Q",
                  created_at: "2022-07-06T13:44:11.005Z",
                  updated_at: "2022-07-06T13:44:11.005Z",
                  deleted_at: null,
                  currency_code: "eur",
                  amount: 3650,
                  min_quantity: null,
                  max_quantity: null,
                  price_list_id: null,
                  variant_id: "variant_01G79W22173DVWVBDPPVDMR3E3",
                  region_id: null,
                  price_list: null,
                },
                {
                  id: "ma_01G79W221HTVF1D3NTWGDZH8XW",
                  created_at: "2022-07-06T13:44:11.005Z",
                  updated_at: "2022-07-06T13:44:11.005Z",
                  deleted_at: null,
                  currency_code: "usd",
                  amount: 4150,
                  min_quantity: null,
                  max_quantity: null,
                  price_list_id: null,
                  variant_id: "variant_01G79W22173DVWVBDPPVDMR3E3",
                  region_id: null,
                  price_list: null,
                },
              ],
              original_price: null,
              calculated_price: null,
            },
          ],
          options: [
            {
              id: "opt_01G79W21YA27KTJP8QKAXHXJNV",
              created_at: "2022-07-06T13:44:11.005Z",
              updated_at: "2022-07-06T13:44:11.005Z",
              deleted_at: null,
              title: "Size",
              product_id: "prod_01G79W21Y2X62MSX7F62Z2K1GR",
              metadata: null,
              values: [
                {
                  id: "optval_01G79W21Z2QJ8JRAMARJ6YJJ84",
                  created_at: "2022-07-06T13:44:11.005Z",
                  updated_at: "2022-07-06T13:44:11.005Z",
                  deleted_at: null,
                  value: "S",
                  option_id: "opt_01G79W21YA27KTJP8QKAXHXJNV",
                  variant_id: "variant_01G79W21Z23GFN6N835KK1JZ4C",
                  metadata: null,
                },
                {
                  id: "optval_01G79W21ZTET99PDP96Z46E5P8",
                  created_at: "2022-07-06T13:44:11.005Z",
                  updated_at: "2022-07-06T13:44:11.005Z",
                  deleted_at: null,
                  value: "M",
                  option_id: "opt_01G79W21YA27KTJP8QKAXHXJNV",
                  variant_id: "variant_01G79W21ZTW152NM1QCW2W8J0Y",
                  metadata: null,
                },
                {
                  id: "optval_01G79W220FM4BFFQ1JEDCQ2QN1",
                  created_at: "2022-07-06T13:44:11.005Z",
                  updated_at: "2022-07-06T13:44:11.005Z",
                  deleted_at: null,
                  value: "L",
                  option_id: "opt_01G79W21YA27KTJP8QKAXHXJNV",
                  variant_id: "variant_01G79W220E9ST41D1JG9XKGW89",
                  metadata: null,
                },
                {
                  id: "optval_01G79W221875NV4CVY38NMJFHP",
                  created_at: "2022-07-06T13:44:11.005Z",
                  updated_at: "2022-07-06T13:44:11.005Z",
                  deleted_at: null,
                  value: "XL",
                  option_id: "opt_01G79W21YA27KTJP8QKAXHXJNV",
                  variant_id: "variant_01G79W22173DVWVBDPPVDMR3E3",
                  metadata: null,
                },
              ],
            },
          ],
          images: [
            {
              id: "img_01G79W21Y2Q3JM26KEPJ4EZYWM",
              created_at: "2022-07-06T13:44:11.005Z",
              updated_at: "2022-07-06T13:44:11.005Z",
              deleted_at: null,
              url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/black_hoodie_front.png",
              metadata: null,
            },
            {
              id: "img_01G79W21Y264M7BSVJMXP4787Q",
              created_at: "2022-07-06T13:44:11.005Z",
              updated_at: "2022-07-06T13:44:11.005Z",
              deleted_at: null,
              url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/black_hoodie_back.png",
              metadata: null,
            },
          ],
          tags: [
            {
              id: "ptag_01G7CDNGXSDSDNNEMCRDEXBDXG",
              created_at: "2022-07-07T13:30:24.457Z",
              updated_at: "2022-07-07T13:30:24.457Z",
              deleted_at: null,
              value: "Winter",
              metadata: null,
            },
          ],
          collection: {
            id: "pcol_01G7YEBHSSJQ6M5MY09BS8VEB5",
            created_at: "2022-07-14T13:28:46.134Z",
            updated_at: "2022-07-14T13:28:46.134Z",
            deleted_at: null,
            title: "New Arrivals",
            handle: "new-arrivals",
            metadata: {},
          },
          type: null,
        },
      ],
      count: 2,
      offset: 0,
      limit: 10,
    },
    [
      "Server",
      "Cowboy",
      "Connection",
      "close",
      "X-Powered-By",
      "Express",
      "Vary",
      "Origin",
      "Access-Control-Allow-Credentials",
      "true",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "11628",
      "Etag",
      'W/"2d6c-OOlx+51Jsd43xU5cGFuI/PatNZc"',
      "Set-Cookie",
      "connect.sid=s%3ANI1ZmCeKDUCHmNdSRV1-Wgsq57sIUtC-.Dx1SZs6EJfryo6sINL8cCQE9wpThka3%2F25AVVO6VlC0; Path=/; Expires=Wed, 27 Jul 2022 18:18:53 GMT; HttpOnly; Secure; SameSite=None",
      "Date",
      "Wed, 27 Jul 2022 08:18:53 GMT",
      "Via",
      "1.1 vegur",
    ],
  );

nock("https://refine-example-storefront.herokuapp.com:443", {
  encodedQueryParams: true,
})
  .get("/store/products")
  .query({
    limit: "10",
    offset: "0",
    "tags%5B%5D": "ptag_01G7CDNGXSDSDNNEMCRDEXBDXG",
  })
  .reply(
    200,
    {
      products: [
        {
          id: "prod_01G79W21Y2X62MSX7F62Z2K1GR",
          created_at: "2022-07-06T13:44:11.005Z",
          updated_at: "2022-07-14T13:30:26.367Z",
          deleted_at: null,
          title: "Medusa Hoodie",
          subtitle: null,
          description:
            "Reimagine the feeling of a classic hoodie. With our cotton hoodie, everyday essentials no longer have to be ordinary.",
          handle: "hoodie",
          is_giftcard: false,
          status: "published",
          thumbnail:
            "https://medusa-public-images.s3.eu-west-1.amazonaws.com/black_hoodie_front.png",
          profile_id: "sp_01G79TC1JRFMCE719R8XN61CKC",
          weight: 400,
          length: null,
          height: null,
          width: null,
          hs_code: "",
          origin_country: null,
          mid_code: "",
          material: null,
          collection_id: "pcol_01G7YEBHSSJQ6M5MY09BS8VEB5",
          type_id: null,
          discountable: true,
          external_id: null,
          metadata: null,
          variants: [
            {
              id: "variant_01G79W21Z23GFN6N835KK1JZ4C",
              created_at: "2022-07-06T13:44:11.005Z",
              updated_at: "2022-07-06T13:44:11.005Z",
              deleted_at: null,
              title: "S",
              product_id: "prod_01G79W21Y2X62MSX7F62Z2K1GR",
              sku: null,
              barcode: null,
              ean: null,
              upc: null,
              inventory_quantity: 100,
              allow_backorder: false,
              manage_inventory: true,
              hs_code: null,
              origin_country: null,
              mid_code: null,
              material: null,
              weight: null,
              length: null,
              height: null,
              width: null,
              metadata: null,
              options: [
                {
                  id: "optval_01G79W21Z2QJ8JRAMARJ6YJJ84",
                  created_at: "2022-07-06T13:44:11.005Z",
                  updated_at: "2022-07-06T13:44:11.005Z",
                  deleted_at: null,
                  value: "S",
                  option_id: "opt_01G79W21YA27KTJP8QKAXHXJNV",
                  variant_id: "variant_01G79W21Z23GFN6N835KK1JZ4C",
                  metadata: null,
                },
              ],
              prices: [
                {
                  id: "ma_01G79W21Z93VYJSRD817TBXW7N",
                  created_at: "2022-07-06T13:44:11.005Z",
                  updated_at: "2022-07-06T13:44:11.005Z",
                  deleted_at: null,
                  currency_code: "eur",
                  amount: 3650,
                  min_quantity: null,
                  max_quantity: null,
                  price_list_id: null,
                  variant_id: "variant_01G79W21Z23GFN6N835KK1JZ4C",
                  region_id: null,
                  price_list: null,
                },
                {
                  id: "ma_01G79W21ZDMB572K9HHCQY2J25",
                  created_at: "2022-07-06T13:44:11.005Z",
                  updated_at: "2022-07-06T13:44:11.005Z",
                  deleted_at: null,
                  currency_code: "usd",
                  amount: 4150,
                  min_quantity: null,
                  max_quantity: null,
                  price_list_id: null,
                  variant_id: "variant_01G79W21Z23GFN6N835KK1JZ4C",
                  region_id: null,
                  price_list: null,
                },
              ],
              original_price: null,
              calculated_price: null,
            },
            {
              id: "variant_01G79W21ZTW152NM1QCW2W8J0Y",
              created_at: "2022-07-06T13:44:11.005Z",
              updated_at: "2022-07-06T13:44:11.005Z",
              deleted_at: null,
              title: "M",
              product_id: "prod_01G79W21Y2X62MSX7F62Z2K1GR",
              sku: null,
              barcode: null,
              ean: null,
              upc: null,
              inventory_quantity: 100,
              allow_backorder: false,
              manage_inventory: true,
              hs_code: null,
              origin_country: null,
              mid_code: null,
              material: null,
              weight: null,
              length: null,
              height: null,
              width: null,
              metadata: null,
              options: [
                {
                  id: "optval_01G79W21ZTET99PDP96Z46E5P8",
                  created_at: "2022-07-06T13:44:11.005Z",
                  updated_at: "2022-07-06T13:44:11.005Z",
                  deleted_at: null,
                  value: "M",
                  option_id: "opt_01G79W21YA27KTJP8QKAXHXJNV",
                  variant_id: "variant_01G79W21ZTW152NM1QCW2W8J0Y",
                  metadata: null,
                },
              ],
              prices: [
                {
                  id: "ma_01G79W21ZZG8ZWAPXX91PTF95Q",
                  created_at: "2022-07-06T13:44:11.005Z",
                  updated_at: "2022-07-06T13:44:11.005Z",
                  deleted_at: null,
                  currency_code: "eur",
                  amount: 3650,
                  min_quantity: null,
                  max_quantity: null,
                  price_list_id: null,
                  variant_id: "variant_01G79W21ZTW152NM1QCW2W8J0Y",
                  region_id: null,
                  price_list: null,
                },
                {
                  id: "ma_01G79W2202CXPM1C013AN2VVVC",
                  created_at: "2022-07-06T13:44:11.005Z",
                  updated_at: "2022-07-06T13:44:11.005Z",
                  deleted_at: null,
                  currency_code: "usd",
                  amount: 4150,
                  min_quantity: null,
                  max_quantity: null,
                  price_list_id: null,
                  variant_id: "variant_01G79W21ZTW152NM1QCW2W8J0Y",
                  region_id: null,
                  price_list: null,
                },
              ],
              original_price: null,
              calculated_price: null,
            },
            {
              id: "variant_01G79W220E9ST41D1JG9XKGW89",
              created_at: "2022-07-06T13:44:11.005Z",
              updated_at: "2022-07-06T13:44:11.005Z",
              deleted_at: null,
              title: "L",
              product_id: "prod_01G79W21Y2X62MSX7F62Z2K1GR",
              sku: null,
              barcode: null,
              ean: null,
              upc: null,
              inventory_quantity: 100,
              allow_backorder: false,
              manage_inventory: true,
              hs_code: null,
              origin_country: null,
              mid_code: null,
              material: null,
              weight: null,
              length: null,
              height: null,
              width: null,
              metadata: null,
              options: [
                {
                  id: "optval_01G79W220FM4BFFQ1JEDCQ2QN1",
                  created_at: "2022-07-06T13:44:11.005Z",
                  updated_at: "2022-07-06T13:44:11.005Z",
                  deleted_at: null,
                  value: "L",
                  option_id: "opt_01G79W21YA27KTJP8QKAXHXJNV",
                  variant_id: "variant_01G79W220E9ST41D1JG9XKGW89",
                  metadata: null,
                },
              ],
              prices: [
                {
                  id: "ma_01G79W220NX0N759VCA8M7ZRQF",
                  created_at: "2022-07-06T13:44:11.005Z",
                  updated_at: "2022-07-06T13:44:11.005Z",
                  deleted_at: null,
                  currency_code: "eur",
                  amount: 3650,
                  min_quantity: null,
                  max_quantity: null,
                  price_list_id: null,
                  variant_id: "variant_01G79W220E9ST41D1JG9XKGW89",
                  region_id: null,
                  price_list: null,
                },
                {
                  id: "ma_01G79W220SWFA2KSBDSD9XQ45G",
                  created_at: "2022-07-06T13:44:11.005Z",
                  updated_at: "2022-07-06T13:44:11.005Z",
                  deleted_at: null,
                  currency_code: "usd",
                  amount: 4150,
                  min_quantity: null,
                  max_quantity: null,
                  price_list_id: null,
                  variant_id: "variant_01G79W220E9ST41D1JG9XKGW89",
                  region_id: null,
                  price_list: null,
                },
              ],
              original_price: null,
              calculated_price: null,
            },
            {
              id: "variant_01G79W22173DVWVBDPPVDMR3E3",
              created_at: "2022-07-06T13:44:11.005Z",
              updated_at: "2022-07-06T13:44:11.005Z",
              deleted_at: null,
              title: "XL",
              product_id: "prod_01G79W21Y2X62MSX7F62Z2K1GR",
              sku: null,
              barcode: null,
              ean: null,
              upc: null,
              inventory_quantity: 100,
              allow_backorder: false,
              manage_inventory: true,
              hs_code: null,
              origin_country: null,
              mid_code: null,
              material: null,
              weight: null,
              length: null,
              height: null,
              width: null,
              metadata: null,
              options: [
                {
                  id: "optval_01G79W221875NV4CVY38NMJFHP",
                  created_at: "2022-07-06T13:44:11.005Z",
                  updated_at: "2022-07-06T13:44:11.005Z",
                  deleted_at: null,
                  value: "XL",
                  option_id: "opt_01G79W21YA27KTJP8QKAXHXJNV",
                  variant_id: "variant_01G79W22173DVWVBDPPVDMR3E3",
                  metadata: null,
                },
              ],
              prices: [
                {
                  id: "ma_01G79W221DYP1FP0E6AQ5NHB5Q",
                  created_at: "2022-07-06T13:44:11.005Z",
                  updated_at: "2022-07-06T13:44:11.005Z",
                  deleted_at: null,
                  currency_code: "eur",
                  amount: 3650,
                  min_quantity: null,
                  max_quantity: null,
                  price_list_id: null,
                  variant_id: "variant_01G79W22173DVWVBDPPVDMR3E3",
                  region_id: null,
                  price_list: null,
                },
                {
                  id: "ma_01G79W221HTVF1D3NTWGDZH8XW",
                  created_at: "2022-07-06T13:44:11.005Z",
                  updated_at: "2022-07-06T13:44:11.005Z",
                  deleted_at: null,
                  currency_code: "usd",
                  amount: 4150,
                  min_quantity: null,
                  max_quantity: null,
                  price_list_id: null,
                  variant_id: "variant_01G79W22173DVWVBDPPVDMR3E3",
                  region_id: null,
                  price_list: null,
                },
              ],
              original_price: null,
              calculated_price: null,
            },
          ],
          options: [
            {
              id: "opt_01G79W21YA27KTJP8QKAXHXJNV",
              created_at: "2022-07-06T13:44:11.005Z",
              updated_at: "2022-07-06T13:44:11.005Z",
              deleted_at: null,
              title: "Size",
              product_id: "prod_01G79W21Y2X62MSX7F62Z2K1GR",
              metadata: null,
              values: [
                {
                  id: "optval_01G79W21Z2QJ8JRAMARJ6YJJ84",
                  created_at: "2022-07-06T13:44:11.005Z",
                  updated_at: "2022-07-06T13:44:11.005Z",
                  deleted_at: null,
                  value: "S",
                  option_id: "opt_01G79W21YA27KTJP8QKAXHXJNV",
                  variant_id: "variant_01G79W21Z23GFN6N835KK1JZ4C",
                  metadata: null,
                },
                {
                  id: "optval_01G79W21ZTET99PDP96Z46E5P8",
                  created_at: "2022-07-06T13:44:11.005Z",
                  updated_at: "2022-07-06T13:44:11.005Z",
                  deleted_at: null,
                  value: "M",
                  option_id: "opt_01G79W21YA27KTJP8QKAXHXJNV",
                  variant_id: "variant_01G79W21ZTW152NM1QCW2W8J0Y",
                  metadata: null,
                },
                {
                  id: "optval_01G79W220FM4BFFQ1JEDCQ2QN1",
                  created_at: "2022-07-06T13:44:11.005Z",
                  updated_at: "2022-07-06T13:44:11.005Z",
                  deleted_at: null,
                  value: "L",
                  option_id: "opt_01G79W21YA27KTJP8QKAXHXJNV",
                  variant_id: "variant_01G79W220E9ST41D1JG9XKGW89",
                  metadata: null,
                },
                {
                  id: "optval_01G79W221875NV4CVY38NMJFHP",
                  created_at: "2022-07-06T13:44:11.005Z",
                  updated_at: "2022-07-06T13:44:11.005Z",
                  deleted_at: null,
                  value: "XL",
                  option_id: "opt_01G79W21YA27KTJP8QKAXHXJNV",
                  variant_id: "variant_01G79W22173DVWVBDPPVDMR3E3",
                  metadata: null,
                },
              ],
            },
          ],
          images: [
            {
              id: "img_01G79W21Y2Q3JM26KEPJ4EZYWM",
              created_at: "2022-07-06T13:44:11.005Z",
              updated_at: "2022-07-06T13:44:11.005Z",
              deleted_at: null,
              url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/black_hoodie_front.png",
              metadata: null,
            },
            {
              id: "img_01G79W21Y264M7BSVJMXP4787Q",
              created_at: "2022-07-06T13:44:11.005Z",
              updated_at: "2022-07-06T13:44:11.005Z",
              deleted_at: null,
              url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/black_hoodie_back.png",
              metadata: null,
            },
          ],
          tags: [
            {
              id: "ptag_01G7CDNGXSDSDNNEMCRDEXBDXG",
              created_at: "2022-07-07T13:30:24.457Z",
              updated_at: "2022-07-07T13:30:24.457Z",
              deleted_at: null,
              value: "Winter",
              metadata: null,
            },
          ],
          collection: {
            id: "pcol_01G7YEBHSSJQ6M5MY09BS8VEB5",
            created_at: "2022-07-14T13:28:46.134Z",
            updated_at: "2022-07-14T13:28:46.134Z",
            deleted_at: null,
            title: "New Arrivals",
            handle: "new-arrivals",
            metadata: {},
          },
          type: null,
        },
      ],
      count: 1,
      offset: 0,
      limit: 10,
    },
    [
      "Server",
      "Cowboy",
      "Connection",
      "close",
      "X-Powered-By",
      "Express",
      "Vary",
      "Origin",
      "Access-Control-Allow-Credentials",
      "true",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "8736",
      "Etag",
      'W/"2220-dLdK1oswmFcWIbQ8XM4dLZc09Bk"',
      "Set-Cookie",
      "connect.sid=s%3AA-5bgDMN39KgTT0rXRNWKXNtiNd7I2ZR.B08Q7hggVcPvM9%2F3rB2PvqM%2Fz7cMQZRq2aiEXblZV%2Bw; Path=/; Expires=Wed, 27 Jul 2022 19:00:36 GMT; HttpOnly; Secure; SameSite=None",
      "Date",
      "Wed, 27 Jul 2022 09:00:36 GMT",
      "Via",
      "1.1 vegur",
    ],
  );
