# csec_frontend

## Development Environment
###**REQUIREMENTS**
 - Node LTS version (v8 or v10)
 - Gatsby-CLI

### Directory Aliases
 - @components: './src/components'
 - @util: './src/util'
 - @sections: './src/components/pages'
 - @styles: './src/styles'
 - @images: './src/images'

### Data Structures
 - **media.json**: Centralized area for all of CSEC's media outlets
```
{
	"text": ${ DISPLAY TEXT },
	"icon": ${ react-icons icon name },
	"link": ${ link when clicked }
}
```

 - **navigation.json**: Centralized area for all of CSEC's pages (For building routes and navigation)
```
{
    "name": ${ DISPLAY NAME },
    "menu": [ // Include is no path
        {
            "name": ${ DISPLAY NAME },
            "path": ${ PATH RELATIVE TO ROOT }
        },
        ...
    ],
    "path": ${ NAVIGATE TO WHEN CLICKED (Don't include if have menu, vise versa) }
}
```

 - **resources.json**: All resources for /resources
```
{
    "title": "Interview Prep",
    "items": [
        { // Nested (Recursive so go nuts)
            "title": "Algorithmic Coding Practice",
            "items": [
                {
                    "text": "LeetCode",
                    "link": "If it's a link, where does text go",
                    "aside": "This is optional"
                },
                ...
            ]
        },
        { // Not nested
            "text": "W3Schools",
            "link": "https://www.w3schools.com/",
            "aside": "Introductory Web"
        }
    ]
}
```
 - **team.json**: Team of csec
```
{
    "title": "Executive Team",
    "text": "The team of Summer 2019 to Winter 2020",
    "members": [
        {
            "name": "Bob Bobby",
            "title": "President",
            "image": "../images/team/Bob.jpg", // Path to image in "@images"
            "media": { // Include all or none
                "email": "mailto:bob@bobby.ca",
                "website": "https://bob.com/",
                "linkedin": "https://linkedin.com/bob",
                "github": "https://github.com/bob"
            }
        }
    ]
},
```