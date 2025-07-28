<template>
    <div class="parent-component">
        <h1>Parent Component</h1>
        <p>GrandchildComponentメッセージ: **{{ messageFromGrandparent }}**</p>
        <GrandchildComponent
        :grandchildMessage="messageFromGrandparent + ' -> 孫へ'"
        @grandchild-event="handleGrandchildEvent"
        />
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import GrandchildComponent from './GrandchildComponent.vue';


//GrandchildComponentから受け取るpropsを定義
defineProps({
    messageFromGrandparent: {
        type: String,
        required: true
    }
})

// 祖父母コンポーネントへイベントを発行するためのemitsを定義
const emit = defineEmits(['parent-event']);

// 孫コンポーネントからのイベントを受け取るハンドラー
const handleGrandchildEvent = (event) => {
    console.log('親コンポーネントで孫からのイベントを受信:', event);
    emit('parent-event', 'ParentからAppへのメッセージ:'+event);
}

</script>

<style scoped>
.parent-component {
  border: 2px solid #42b983;
  padding: 15px;
  margin: 20px 0;
  border-radius: 8px;
  background-color: #e6f7ef;
}
</style>