## Angular Portfolio

This project is a tech blog/portfolio which I use to post various projects, passions and updates.

It's written in Angular using Typescript, HTML, SCSS and Firebase for the backend. 

Current features include:

* Content management system
* Automatic deployment with webhooks through API integration
* User authentication
* Project page
* Landing page
* Blog post scheduling
* Latex (Katex) and Markdown support
* Image uploading
* Lazy loaded modules


---

## Setup 

### Build instructions

```shell
ng build --prod
```

To reduce the output size further consider using build-optimizer or aot compilation.

### Live debugging 

```
ng serve
```

Can be used with flag --host 0.0.0.0 to allow remote debugging.


### Hosting

Currently hosted using Raspberry PI 3b, Nginx 1.10.3 with Letsencrypt and DynDNS. Traffic payload is then reduced with gzip compression, 
lossy images, lazy loading and cache policies.


### Deployment

Uses github webhooks to trigger deployment for the master branch through a hidden api endpoint.
