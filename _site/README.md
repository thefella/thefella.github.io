## f/8 Workshops ##

Running on Jekyll and hosted at http://f8workshops.com


### Local Setup ###

```
Install Jekyll
gem install jekyll-redirect-from --source http://rubygems.org
Run with "jekyll serve --host=0.0.0.0" (allows you to connect via IP for mobile testing)
```

### Site Layout ###

Workshop pages are kept in root-level folder (e.g. 'Iceland'), which not only help with file organisation, but also automatically assigns categories to them in Jekyll. 

Basic workshop info is held in the *front matter* of each post. The more intricate stuff is held in yaml files in the *_data* folder. This is later referenced in the *include* files.