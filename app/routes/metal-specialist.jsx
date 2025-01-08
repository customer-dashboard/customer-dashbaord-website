export async function action({ request }) {

    const formData = await request.formData();
  
    const title = formData.get('title');
  
    const content = formData.get('content');
  
  
  
    // Perform your logic to store the new post data (e.g., database interaction)
  
  
  
    return redirect('/posts'); // Redirect to a list of posts after successful submission
  
  }
  
  
  
  // In your component:
  
  
  
  <form method="post" action="/metal-specialist">
  
    <input type="text" name="title" placeholder="Title" />
  
    <textarea name="content" placeholder="Content" />
  
    <button type="submit">Create Post</button>
  
  </form>