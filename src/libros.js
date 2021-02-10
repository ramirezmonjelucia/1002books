db.books.drop()
db.books.insertMany([
   {
      "_id": 1,
      "Título": "Secuestrado",
      "Editorial": "Alba Editorial",
      "Autor": "Robert Louis Stevenson",
      "Fecha": new Date("2018-09-19"),
      "NºPáginas": 280,
      "Tipo": "eBook",
      "Vendidos": 50000,
      "Precio€": 17
   },
   {
      "_id": 2,
      "Título": "Línea de fuego",
      "Editorial": "Alfaguara",
      "Autor": "Arturo Pérez Reverte",
      "Fecha": new Date("2020-10-06"),
      "NºPáginas": 688,
      "Tipo": "Online",
      "Vendidos": 50000,
      "Precio€": 17
   },
   {
      "_id": 3,
      "Título": "Las tinieblas y el alba",
      "Editorial": "Plaza & Janes",
      "Autor": "Ken Follett",
      "Fecha": new Date("2020-09-18"),
      "NºPáginas": 936,
      "Tipo": "eBook",
      "Vendidos": 2000,
      "Precio€": 19
   },
   {
      "_id": 4,
      "Título": "La vida contada por un sapiens a un neandertal",
      "Editorial": "Alfaguara",
      "Autor": "Juan José Millas",
      "Fecha": new Date("2020-09-23"),
      "NºPáginas": 224,
      "Tipo": "Encuadernado",
      "Vendidos": 25000,
      "Precio€": 20
   },
   {
      "_id": 5,
      "Título": "Dime qué comes y te diré qué bacterias tienes. El intestino, nuestro segundo cerebro",
      "Editorial": "Grijalbo Ilustrados",
      "Autor": "Blanca García",
      "Fecha": new Date("2020-10-08"),
      "NºPáginas": 272,
      "Tipo": "Online",
      "Vendidos": 4000,
      "Precio€": 20
   },
   {
      "_id": 6,
      "Título": "¿A qué estás esperando?",
      "Editorial": "Esencia",
      "Autor": "Megan Maxwell",
      "Fecha": new Date("2020-10-29"),
      "NºPáginas": 672,
      "Tipo": "Encuadernado",
      "Vendidos": 78000,
      "Precio€": 13
   },
   {
      "_id": 7,
      "Título": "La buena suerte",
      "Editorial": "Alfaguara",
      "Autor": "Rosa Montero",
      "Fecha": new Date("2020-08-27"),
      "NºPáginas": 328,
      "Tipo": "eBook",
      "Vendidos": 12000,
      "Precio€": 14
   },
   {
      "_id": 8,
      "Título": "Los tiempos del odio",
      "Editorial": "Booket",
      "Autor": "Rosa Montero",
      "Fecha": new Date("2020-03-10"),
      "NºPáginas": 400,
      "Tipo": "Online",
      "Vendidos": 30000,
      "Precio€": 18
   },
   {
      "_id": 9,
      "Título": "La ridícula idea de no volver a verte",
      "Editorial": "Booket",
      "Autor": "Rosa Montero",
      "Fecha": new Date("2014-06-03"),
      "NºPáginas": 240,
      "Tipo": "Encuadernado",
      "Vendidos": 562000,
      "Precio€": 17
   },
   {
      "_id": 10,
      "Título": "La carne",
      "Editorial": "Debolsillo",
      "Autor": "Rosa Montero",
      "Fecha": new Date("2017-09-07"),
      "NºPáginas": 240,
      "Tipo": "Online",
      "Vendidos": 10000,
      "Precio€": 20
   },
   {
      "_id": 11,
      "Título": "Sidi",
      "Editorial": "Alfaguara",
      "Autor": "Arturo Pérez Reverte",
      "Fecha": new Date("2019-09-18"),
      "NºPáginas": 376,
      "Tipo": "Encuadernado",
      "Vendidos": 20000,
      "Precio€": 20
   },
   {
      "_id": 12,
      "Título": "La chica de nieve",
      "Editorial": "Suma",
      "Autor": "Javier Castillo",
      "Fecha": new Date("2020-03-12"),
      "NºPáginas": 512,
      "Tipo": "Encuadernado",
      "Vendidos": 50000,
      "Precio€": 45
   },
   {
      "_id": 13,
      "Título": "El día que se perdió la cordura",
      "Editorial": "Debolsillo",
      "Autor": "Javier Castillo",
      "Fecha": new Date("2019-05-09"),
      "NºPáginas": 456,
      "Tipo": "Online",
      "Vendidos": 50000,
      "Precio€": 50
   },
   {
      "_id": 14,
      "Título": "El día que se perdió el amor",
      "Editorial": "Debolsillo",
      "Autor": "Javier Castillo",
      "Fecha": new Date("2019-05-09"),
      "NºPáginas": 432,
      "Tipo": "Online",
      "Vendidos": 452000,
      "Precio€": 14
   },
   {
      "_id": 15,
      "Título": "Todo lo que sucedió con Miranda Huff",
      "Editorial": "Suma",
      "Autor": "Javier Castillo",
      "Fecha": new Date("2019-03-14"),
      "NºPáginas": 448,
      "Tipo": "eBook",
      "Vendidos": 740000,
      "Precio€": 15
   },
   {
      "_id": 16,
      "Título": "Diario de Anne Frank",
      "Editorial": "Debolsillo",
      "Autor": "Anne Frank",
      "Fecha": new Date("2018-01-08"),
      "NºPáginas": 388,
      "Tipo": "Encuadernado",
      "Vendidos": 50000,
      "Precio€": 8
   },
   {
      "_id": 17,
      "Título": "Aquitania",
      "Editorial": "Planeta",
      "Autor": "Eva García Sáenz de Urturi",
      "Fecha": new Date("2020-11-05"),
      "NºPáginas": 416,
      "Tipo": "eBook",
      "Vendidos": 79600,
      "Precio€": 10
   },
   {
      "_id": 18,
      "Título": "Un verdor terrible",
      "Editorial": "Anagrama",
      "Autor": "Benjamín Labatut",
      "Fecha": new Date("2020-09-02"),
      "NºPáginas": 224,
      "Tipo": "Online",
      "Vendidos": 458000,
      "Precio€": 15
   },
   {
      "_id": 19,
      "Título": "La vida mentirosa de los adultos",
      "Editorial": "LUMEN",
      "Autor": "Elena Ferrante",
      "Fecha": new Date("2020-09-01"),
      "NºPáginas": 368,
      "Tipo": "eBook",
      "Vendidos": 147777,
      "Precio€": 14
   },
   {
      "_id": 20,
      "Título": "Una promesa de juventud",
      "Editorial": "Suma",
      "Autor": "María Reig",
      "Fecha": new Date("2020-08-27"),
      "NºPáginas": 752,
      "Tipo": "eBook",
      "Vendidos": 20000,
      "Precio€": 16
   },
   {
      "_id": 21,
      "Título": "Las alas de Sophie",
      "Editorial": "Planeta",
      "Autor": "Alice Kellen",
      "Fecha": new Date("2020-08-25"),
      "NºPáginas": 400,
      "Tipo": "Online",
      "Vendidos": 14000,
      "Precio€": 12
   }
])