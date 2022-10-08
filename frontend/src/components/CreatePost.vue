<template>
  <div>
    <form @submit.prevent="submit" class="d-flex flex-column mb-3 col-6 offset-3 col-sm-4 offset-sm-4 mb-5">

      <label class="form-label"> Title</label>
      <input class="form-control bg-white" type="text" minlength="2" maxlength="40" v-model="title " id="titleId"
        required />

      <tempalte class=" d-flex justify-content-start my-3 ">
        <fieldset>
          <div>
            <legend class="col-form-label pe-3">
              What would you like to post?
            </legend>
          </div>
          <div class="d-flex flex-row pt-2">
            <div class="form-check pe-3 ">
              <input class="form-check-input  " type="radio" name="gridRadios" id="gridRadios1" value="text"
                v-model="postType" :checked="checked" required />
              <label class="form-check-label d-flex flex-row " for="gridRadios1">
                <font-awesome-icon icon="fa-brands fa-blogger" class="text-primary pt-1 pe-2" /> Text
              </label>
            </div>
            <div class="form-check  ">
              <input class="form-check-input " type="radio" name="gridRadios" id="gridRadios2" value="image"
                v-model="postType" :checked="checked" required />
              <label class="form-check-label d-flex flex-row " for="gridRadios2">
                <font-awesome-icon icon="fa-solid fa-image  " class="text-primary pt-1 pe-2" />
                Image
              </label>
            </div>
          </div>
        </fieldset>

      </tempalte>
      <template v-if="postType === 'text' ">
        <label class="form-label">Body</label>
        <textarea id="bodyId" v-model="body" style="height: 100px" required></textarea>
      </template>
      <template v-if="postType === 'image'">
        <div>
          <input class="form-control bg-white" type="file" ref="image" @change="createPreview"/>
          <img id="imageId" :src="previewImage" class="w-75 mt-3" />
        </div>
      </template>

      <div class="d-grid gap-2 col-4 mx-auto">
        <button class="btn btn-lg btn-primary"  type="submit">New Post</button>
      </div>
    </form>
  </div>
</template>
<script>
import Cookies from 'js-cookie'

console.log('newToken')
export default {

  data: () => ({

    title: "",
    body: "",
    image: "",
    previewImage: "",

    textPost: false,
    imagePost: false,
    checked: false,
    postType: ''
  }),
  methods: {
    createPreview() {
      this.previewImage = URL.createObjectURL(this.$refs.image.files[0]);
      this.image = this.$refs.image.files[0];
    },
  


    submit() {
      const newToken = Cookies.get('token')
      const userId = Cookies.get('userId')

      const formData = new FormData()
     


      this.checked = false
      this.postType = ''
      const post = {
        timestamp: Date.now(),
        title: this.title
      }

      if (this.postType === 'text') {
        post.body = this.body
        console.log(post.body)
      }else {
        formData.append("image", this.image.filename),
        post.image = this.image

      }



      fetch("http://localhost:8000/api/posts/", {
        method: "POST",
        headers: {
          'Authorization': "Bearer " + newToken,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: this.title,
          body: this.body,
          imageUrl: this.image,
          userId: parseInt(userId)
          


        }),

      }).then((response) => {
        return response.json()

          .then(data => {

            console.log(data)
          }
          )

      })
        .catch(error => {
          console.log(error)
        })




      this.$emit("create", post);
      this.title = ""
      this.body = ""
      this.image = ""
      this.previewImage = ""
      this.textPost = false
      this.imagePost = false



    },
  },
}


</script>
