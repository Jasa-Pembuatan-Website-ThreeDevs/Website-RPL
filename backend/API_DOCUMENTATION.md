# Student Dashboard & Public Showcase API Documentation

This documentation serves as a guide for the frontend team to consume the REST API built with Laravel Sanctum.

**Base URL:** \`http://your-api-domain.com/api\`  
**Accept Header:** \`application/json\`

---

## 1. Authentication

### Register Student
\`POST /register\`

Create a new student account.

**Request Body:**
| Field | Type | Required | Description |
|---|---|---|---|
| \`name\` | string | Yes | Full name of the student |
| \`email\` | string | Yes | Unique email address |
| \`password\` | string | Yes | Minimum 8 characters |
| \`password_confirmation\` | string | Yes | Must match \`password\` |

**Response (201 Created):**
\`\`\`json
{
    "status": "success",
    "message": "Registration successful",
    "data": {
        "user": { "id": 1, "name": "John Doe", "email": "john@example.com", "role": "student" },
        "token": "1|AbCdeFgHiJk..."
    }
}
\`\`\`

### Login
\`POST /login\`

**Request Body:**
| Field | Type | Required | Description |
|---|---|---|---|
| \`email\` | string | Yes | |
| \`password\` | string | Yes | |

**Response (200 OK):**
\`\`\`json
{
    "status": "success",
    "message": "Login successful",
    "data": {
        "user": { "id": 1, "name": "John Doe", "role": "student" },
        "token": "2|XyZ123..."
    }
}
\`\`\`

### Logout
\`POST /logout\`  
**Headers:** \`Authorization: Bearer {token}\`

**Response (200 OK):**
\`\`\`json
{
    "status": "success",
    "message": "Logged out successfully"
}
\`\`\`

---

## 2. Student Profile (Protected)
**Headers:** \`Authorization: Bearer {token}\`

### Get Profile
\`GET /student/profile\`

**Response (200 OK):**
\`\`\`json
{
    "status": "success",
    "data": {
        "id": 1,
        "name": "John Doe",
        "student": {
            "grade_level": "12",
            "specialty": "Web Development",
            "avatar": "avatars/filename.jpg",
            "github_url": "https://github.com/...",
            "linkedin_url": null,
            "bio": "Hello world!"
        }
    }
}
\`\`\`

### Update/Create Profile
\`POST /student/profile\`  
*Note: Use \`multipart/form-data\` if uploading an avatar.*

**Request Body:**
| Field | Type | Required | Description |
|---|---|---|---|
| \`avatar\` | file | No | image (jpg, png, etc.), max 2MB |
| \`grade_level\` | enum | Yes | "10", "11", or "12" |
| \`specialty\` | string | Yes | e.g., "UI/UX Designer" |
| \`github_url\` | url | No | |
| \`linkedin_url\` | url | No | |
| \`bio\` | text | No | |

---

## 3. Student Projects (Protected)
**Headers:** \`Authorization: Bearer {token}\`

### List My Projects
\`GET /student/projects\`

### Add New Project
\`POST /student/projects\`  
*Note: Use \`multipart/form-data\` for \`thumbnail_image\`.*

**Request Body:**
| Field | Type | Required | Description |
|---|---|---|---|
| \`title\` | string | Yes | Project name |
| \`category_id\` | integer | Yes | ID from \`/public/categories\` |
| \`description\` | text | Yes | |
| \`tech_stack\` | array | Yes | e.g., \`["React", "Laravel"]\` |
| \`thumbnail_image\` | file | No | image, max 2MB |
| \`demo_url\` | url | No | |
| \`repo_url\` | url | No | |

### Update Project
\`PUT /student/projects/{id}\`  
*Note: Laravel has issues with \`PUT\` and files. If updating the image, use \`POST\` with \`_method=PUT\`.*

### Delete Project
\`DELETE /student/projects/{id}\`

---

## 4. Public Showcase (No Auth)

### List All Projects
\`GET /public/projects\`

**Filters (Query Params):**
- \`category_id\`: Filter by specific category.
- \`grade_level\`: "10", "11", or "12".

**Response (200 OK):**
\`\`\`json
{
    "status": "success",
    "data": [
        {
            "id": 1,
            "title": "Portfolio Web",
            "slug": "portfolio-web-x1y2z",
            "student": { "user": { "name": "John Doe" }, "grade_level": "12" },
            "category": { "name": "Web Application" }
        }
    ]
}
\`\`\`

### List Categories
\`GET /public/categories\`

Retrieve categories for the project creation form or public filters.
