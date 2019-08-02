<template>
  <div class="hello">
    <w-tag
      :key="tag.color"
      v-for="tag in dynamicTags"
      :closable="true"
      :disable-transitions="false"
      @close="handleClose(tag)" :color="tag.color">
      {{tag.name}}
    </w-tag>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
   data() {
      return {
        dynamicTags: [{
            name: '标签ttttt一',
            color: 'primary' 
        }, {
           name: '标签二',
           color: 'success' 
        }, {
           name: '标签三',
           color: 'info'           
        }, {
            name: '标签四',
            color: 'danger'
        }]
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
