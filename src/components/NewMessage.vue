<template>
    <div class="new-message">
        <form @submit.prevent="addMessage">
            <label for="new-message">New message(enter to add):</label>
            <div class="new-message-input">
                <input type="text" name="new-message" v-model="newMessage">
                <i @click.prevent="addMessage" class="material-icons send">send</i> 
            </div>            
            <p class="red-text" v-if="feedback"> {{ feedback }}</p>
        </form>
    </div>
</template>

<script>
import db from '@/firebase/init'

export default {
    name: 'NewMessage',
    props: ['name'],
    data() {
        return {
            newMessage: null,
            feedback: null
        }
    },
    methods: {
        addMessage() {
            if (this.newMessage) {
                db.collection('messages').add({
                  content: this.newMessage,
                  name: this.name,
                  timeStamp: Date.now()  
                }).catch(err => {
                    console.log(err);
                })
                this.newMessage = null
            } else {
                this.feedback = 'You must enter a text message'
            }
        }
    }
}
</script>
<style>
    .new-message-input {
        display: flex;
        color: #009688;
        cursor: pointer;
    }
</style>