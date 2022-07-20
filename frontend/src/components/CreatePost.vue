<template>
<div>
       <form @submit.prevent="createPost"    class="d-flex flex-column mb-3 col-6 offset-3 col-sm-4 offset-sm-4 mb-5  "> 
      <label > Author</label>
      <input type="text" v-model="author" required>
      <label > Time</label>
      <input type="text" v-model="time">
      <label > Title</label>
      <input type="text" v-model="title">
      <label>Body</label>
      <textarea v-model="body"  style="height:100px;"></textarea>
              
        <div class="mb-3">
          <label for="formFile" class="form-label">Default file input example</label>
          <input class="form-control" type="file" ref="image" @change="createPreview">
          <img :src="previewImage" class=" w-75 mt-3">
        </div>

        <label  > Seen</label>
      <input type="text" v-model="Seen" class=" mb-2  ">
      <div class="d-grid gap-2 col-4 mx-auto">
        <button class="btn btn-lg btn-primary" type="submit">New Post</button>

      </div>
    </form>
  </div>
</template>

<script  >
const timeEl = document.getElementById('time')
const postDate = Date.now()
const date = new Date(postDate)
timeEl.textContent = date.toLocaleDateString()

const post = {
	props: {
		timestamp: String
	},
  computed: {
		formatedTime () {
			const date = new Date(this.timestamp)
			return date.toLocaleDateString()
		}
	}
}
console.log(post)

export default {

		data: () => ({
      author: '',
      time: '',
      title: '',
      body: '',
      image: '',
      previewImage:'',
      seen: ''
		}),
		methods: {
 createPreview (){this.previewImage= URL.createObjectURL (this.$refs.image.files[0]) },

			submit() {
				this.$emit('submit', {
					timestamp: Date.now(),
					author: this.author,
            time: this.time,
            title: this.title,
            body: this.body ,
            image: this.image,
            seen: this.seen
				})
			}
    }
}

  
</script>