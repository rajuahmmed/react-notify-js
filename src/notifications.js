import EventEmitter from 'events'

class notifications extends EventEmitter{
    constructor(){
        super()

        this.nextId = Date.now();

        this.default = {
            message: '',
            type: 'default',
            time: 10000,
            animation: 'bounce'
        }

        this.items = {}
    }

    add(data){

        while(this.items[this.nextId.toString(36)]){
            this.nextId++
            console.log(this.nextId)
        }
        
        this.items[this.nextId.toString(36)] = Object.assign({}, this.default, data)

        this.nextId++

        this.emit('change')
    }

    remove(id){
        delete this.items[id]

        this.emit('change')
    }
}

export default notifications;