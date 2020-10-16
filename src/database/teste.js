const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

    Database.then(async db=>{

        // //Inserir dados na tabela
        await saveOrphanage(db,  {
            lat:"-27.2160932",
            lng:"-49.6335018",
            name: "Lar do amor",
            about:"Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
            whatsapp:"99988855",
            email:"lardoamor@fakeemail.com",
            images:[
                "https://images.unsplash.com/photo-1592840331052-16e15c2c6f95?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
                "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
                "https://images.unsplash.com/photo-1590009617786-6d054a2a3c7c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
            ].toString(),
            instructions:"Venha como se sentir a vontade e traga muito amor e paciência para dar.",
            opening_hours:"Horário de visitas Das 18h até 8h",
            open_on_weekends: "0"
        
        });


        // // // Consultar dados
        const selectedOrphanages = await db.all("SELECT * FROM orphanages");
        console.log(selectedOrphanages);

        // //--- Cosultar apenas um orfanato pelo ID

        // const orphanages = await db.all('SELECT * FROM orphanages WHERE id = "1"');

        // console.log(orphanages);


        // Apagar dado da tabelas

        // await db.run("DELETE FROM orphanages WHERE id ='4'")
        // await db.run("DELETE FROM orphanages WHERE id ='5'")
        // await db.run("DELETE FROM orphanages WHERE id ='6'")
    })
