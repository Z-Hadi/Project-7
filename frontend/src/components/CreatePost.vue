<template>
  <div>
    <form @submit.prevent="submit" class="d-flex flex-column mb-3 col-6 offset-3 col-sm-4 offset-sm-4 mb-5">
      <label class="form-label"> Author</label>
      <input class="form-control bg-white" type="text" v-model="author" required />
      <label class="form-label"> Title</label>
      <input class="form-control bg-white" type="text" v-model="title " id="titleId"/>

      <tempalte class=" d-flex justify-content-start my-3 ">
        <fieldset>
          <div >
          <legend class="col-form-label pe-3">
            What would you like to post?
          </legend></div>
          <div class="d-flex flex-row pt-2">
            <div class="form-check pe-3 ">
              <input class="form-check-input  " type="radio" name="gridRadios" id="gridRadios1" value="text" v-model="postType" :checked="checked"
                />
              <label class="form-check-label d-flex flex-row " for="gridRadios1"> 
                <font-awesome-icon icon="fa-brands fa-blogger" class="text-primary pt-1 pe-2" /> Text
              </label>
            </div>
            <div class="form-check  ">
              <input class="form-check-input "  type="radio" name="gridRadios" id="gridRadios2" value="image" v-model="postType" :checked="checked"
               />
              <label class="form-check-label d-flex flex-row " for="gridRadios2"  >
                <font-awesome-icon icon="fa-solid fa-image  " class="text-primary pt-1 pe-2" />  
                Image
              </label>
            </div>
          </div>
        </fieldset>
        
      </tempalte>
      <template v-if="postType === 'text'">
        <label class="form-label">Body</label>
        <textarea id="bodyId" v-model="body" style="height: 100px"></textarea>
      </template>
      <template v-if="postType === 'image'">
        <div>
          <input class="form-control bg-white" type="file" ref="image" @change="createPreview" />
          <img id="imageId" :src="previewImage" class="w-75 mt-3" />
        </div>
      </template>
      <label class="form-label"> Seen</label>
      <input class="form-control bg-white mb-2" type="text" v-model="seen" />
      <div class="d-grid gap-2 col-4 mx-auto">
        <button class="btn btn-lg btn-primary"  type="submit">New Post</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    author: "",
    title: "",
    body: "",
    image: "",
    previewImage: "",
    seen: "",
    textPost: false,
    imagePost: false,
    checked: false,
    postType:''
  }),
  methods: {
    createPreview() {
      this.previewImage = URL.createObjectURL(this.$refs.image.files[0]);
    },

    submit() {
      this.checked=false
      this.postType=''
    const post ={
        timestamp: Date.now(),
        title: this.title

              
    }
      if (this.postType === 'text' ){
  post.body= this.body
      }
      else 
    {
      post.image=this.image
    }

      this.$emit("create", post);
      this.title=''
      this.body=''
      this.image=''
      this.textPost= false
      this.imagePost= false

      

    },
  },
};


export async function postNewPost(
  content: string,
  author: number,
  image_url: string | null = null
) {
  const request = await fetch("http://localhost:3000/posts", {
    method: "POST",
    body: JSON.stringify({
      content: content,
      user: author,
      image_url: image_url,
    }),
    headers: getHttpHeaders(),
  });

  const response = await request.json();

  if (!request.ok) {
    throw new Error(`Error ${request.status} : ${response.error}`);
  }

  return response;
}

</script>
