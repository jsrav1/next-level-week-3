const Database = require("./db");
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
  /*
  //inserir dados na tabela
  await saveOrphanage(db, {
        id: 1,
        lat: "-20.300613",
        lng: "-40.292252",
        name: "Lar das meninas",
        about: "Presta assistencia a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "279981047098",
        images: [
            "https://images.unsplash.com/photo-1595803330237-83a3a8698450?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            
            "https://images.unsplash.com/photo-1576715159532-32eb4490f140?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas das 18h até 8h",
        open_on_weekends: "1"

    })
    */

  //consultar dados da tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages")
  console.log(selectedOrphanages)

  
  //consultar somente 1 orphanato, pelo id
  //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
  //console.log(orphanage)

  //deletar dado da tabela
  //console.log(await db.run("DELETE FROM orphanages WHERE id='4'")) 
  //console.log(await db.run("DELETE FROM orphanages WHERE id='5'"))

});

