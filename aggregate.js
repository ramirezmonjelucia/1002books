db.books.aggregate([
        {
            '$match': {
                '$expr': {
                    '$gt': [
                        {
                            '$year': '$Fecha'
                        }, 2018
                    ]
                }
            }
        }, {
            '$group': {
                '_id': '$Autor', 
                'Total_Libros_Vendidos': {
                    '$sum': '$Vendidos'
                }, 
                'DineroVentas': {
                    '$sum': '$Precio€'
                }
            }
        }, {
            '$project': {
                'Autor': '$_id', 
                '_id': 0, 
                'Total_Libros_Vendidos': 1, 
                'Dinero_total_obtenido': {
                    '$sum': {
                        '$multiply': [
                            '$Total_Libros_Vendidos', '$DineroVentas'
                        ]
                    }
                }
            }
        }, {
            '$sort': {
                'Dinero_total_obtenido': -1
            }
        }, {
            '$match': {
                'Dinero_total_obtenido': {
                    '$gt': 700000
                }
            }
        }
    ]).pretty();