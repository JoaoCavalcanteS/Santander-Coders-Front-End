const minhaLista = [
    {id:'1', value:'Fruta'},
    {id:'2', value:'Legume'},
    {id:'3', value:'Carne'},
    {id:'4', value:'Doce'}
]



export default function MinhaLista(){
    //Map [e uma function atrelada a listas no JS]
    //Listas precisam de chaves{key} no react, para saber qual item vai ser escolhido e atualizado
    return minhaLista.map((item) => {
        return(
            <div key={item.id}>
                <h4>{item.value}</h4>
            </div>
        )
    })

}