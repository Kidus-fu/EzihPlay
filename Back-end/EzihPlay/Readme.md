# EzihPlay Backend Documentation

## Overview
EzihPlay is a community-driven platform where music lovers can share, discover, and review playlists from YouTube, Spotify, and other streaming services.  
Inspired by Ethiopia’s rich musical heritage and modern digital culture, EzihPlay allows users to post their favorite playlists, rate them, and leave thoughtful reviews.  
Whether it’s traditional Ethiopian melodies, Afrobeat, or global hits, EzihPlay connects people through the universal language of music.



* RESTful APIs to perform CRUD operations on notes and user data
* Authentication & Authorization using token-based JWT access control
* Error Handling & Validation to ensure data integrity
* Deployment Instructions for running the backend on production servers in render.com

## API Endpoints

### Authentication & Authorization

* **`POST /api-v1/token/`** → Obtain JWT token using user name
* **`POST /api-v1/token/refresh/`** → Refresh JWT token
* **`POST /api-v1/register/`** → To sign up

### User Endpoints

* **`POST /api-v1/users/`** → List users
* **`POST /api-v1/users/{uuid}`** → Get user details


## Post
* **`GET /api-v1/posts/`** → List all  posts
* **`GET /api-v1/posts/?search=keyword`** → searching by title and description
* **`GET /api-v1/posts/?category_title=Productivity`** → Filtering  category title
* **`GET /api-v1/posts/{title}`** → Retrieve a post
* **`POST /api-v1/posts/`** → Create a post
* **`PUT /api-v1/posts/{title}`** → Update a post
* **`DELETE /api-v1/posts/{title}/`** → Delete a post


### Environment Variables

`.env` file must include:

  ```env
  ALLOWED_HOSTS=*
  DATABASE_URL=postgres://user:password@localhost:5432/
  DEBUG=True
  SECRET_KEY=your-secret-key
  ```
## Example a JOSN Format

### Refresh Token

```json
{
    "refresh": ""
}
```

### User Signup 👤

```json
{
    "username": "",
    "email": "",
    "password": "",
    "first_name": "",
    "last_name": ""
}
```
### User Signin  👤

```json
{
    "username":"",
    "password":""
}

```
### Post 
```json
{
  "media_type": "youtube",
  "media_url": "https://www.youtube.com/playlist?list=PL1234567890",
  "title": "Best Ethiopian Jazz",
  "description": "A mix of classic and modern Ethio-jazz tracks.",
  "thumbnail_url": "https://example.com/jazz.jpg"
}

```
### Post review 

```json
{
    "post": null,
    "rating": null,
    "comment": ""
}
```

### Users Info 👤

```json
{
    "user": null,
    "bio": "",
    "profile_picture": null,
    "is_verified": false,
    "phone_number": "",
    "location": "",
    "date_of_birth": "YYYY-MM-DD",
    "gender": "Male | Female | Other",
    "education": "",
    "preferred_language": "en | am | etc."
}

```


### 🛠 Need Help? If you face any issues, open an issue on GitHub or contact the developer!

### 📧 Contact
Back-end developer [Githube]("https://github.com/Kidus-fu/")
```
kidussurafeldev@gmail.com
```