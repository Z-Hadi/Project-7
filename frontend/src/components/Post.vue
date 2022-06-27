<template>
<div class="card col-6 offset-3 col-sm-4 offset-sm-4 mb-5">
    <header class="post-header">
        <div >
          <p class="post-author fw-bold">post author</p>
          <time class="post-author">26/06/2022</time>
        </div>
      </header>
  <div class="card-body">
    <h4 class="card-title">Post With Media</h4>
        </div>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA8cM4V3nN0aZrFmFITHm49TCDAOYOd1QmPw&usqp=CAU" class="card-img-bottom border " alt="...">
 

<ul class="nav justify-content-center shadow-none p-3  bg-light rounded">
 
  <li class="nav-item  d-flex justify-content-between align-items-center">
    <a class="nav-link "><font-awesome-icon icon="fa-solid fa-eye" />  Read</a>
      <span class="badge bg-primary rounded-pill">14</span>
  </li>

</ul>
</div>


<div class="card col-6 offset-3 col-sm-4 offset-sm-4">
    <header class="post-header">
        <div >
          <p class="post-author fw-bold">post author</p>
          <time class="post-author">26/06/2022</time>
        </div>
      </header>
  <div class="card-body">
    <h4 class="card-title">Post With Paraghraph</h4>
        </div>
  <p>A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.  A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.  A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.</p>

<ul class="nav justify-content-center shadow-none p-3  bg-light rounded">

   <li class="nav-item  d-flex justify-content-between align-items-center">
    <a class="nav-link "><font-awesome-icon icon="fa-solid fa-eye" />  Read</a>
      <span class="badge bg-primary rounded-pill">5</span>
  </li>

</ul>
</div>

</template>

<script  >
export default {
  name: 'PostCompo',
  props: {
    msg: String
  }
}
  
</script>

<!-- Custom styles for this template -->
<style scoped lang="scss">

</style>


