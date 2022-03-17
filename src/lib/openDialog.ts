import {createApp, h} from 'vue';
import Dialog from  './Dialog.vue'

export const openDialog = (options)=> {
  const {title , content , ok , cancel} = options

  const div = document.createElement('div')
  document.body.appendChild(div)
  const close = ()=>{
    app.unmount()
    div.remove()
  }
  const app = createApp({
    render(){
      return h(Dialog , {visible:true,
        'onUpdate:visible' : (newValue)=>{
          if(newValue === false) {
            close()
          }
        },
        ok , cancel
      } , { title: () => title , content: () => content })   //
    }
  })
  app.mount(div)
}