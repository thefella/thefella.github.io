---
#redirect_from: 	"/"

# BASICS
title: 			"Faroe Islands May 2016"
location: 		"The Faroe Islands"
hero: 			"Faroe Islands"
teachers: 		greg,conor,dan
tagline: 		'Landscape photography &amp; <span class="phrase">editing workshop</span>'
description: 	"Experience The Faroe Islands untouched landscapes alongside experienced photographers. Then learn how to make your images look amazing."
permalink: 		/faroe-islands-may-2016/
endDate: 		2016-05-21
heroImage: 		/assets/img/faroes/saksun-x3.jpg
seller: 		"3 teachers, 6 days, 10 photographers."
social_image: 	/assets/img/faroes/social_image.jpg


# SPONSOR
#sponsor: 		Aviato
#sponsorImage: 	/assets/img/sponsors/aviato.jpg


# AVAILABILITY
published: 		true
status: 		confirmed
soldout: 		true
secret: 		false


# BOOKING AND MAILING
contactemail: 		zoetimmers@me.com
tandc: 				"/assets/docs/faroes/Faroe_Islands_May_2016_T&C.pdf"
#tito: 				https://ti.to/thefella/faroe-islands-may-2016
billetto: 			113660
#getinvited: 		faroe-islands-may-2016
mailchimpSite: 		FAROES16


# NAVIGATION
secondaryNav:
  - Intro
  - Teachers
  - Schedule
  - Details
  - Smartphones
  - FAQ


# ORGANISATION
tags:
  - faroes
categories:
  - previous


# SITEMAP
sitemap:
  lastmod: 		2016-01-05
  priority: 	0.7
  changefreq: 	'monthly'
  exclude: 		'no'


# LAYOUT
pageClass: 		"workshop faroe-islands faroe-islands-may-2016"
layout: 		workshop
---


[//]: # Intro
{% include intro.html intro=site.data.faroes.may-2016.intro %}


[//]: # Conor Quote
{% include quote.html quote="The Faroe Islands are so close to my home in the UK, yet they feel like a completely different world!" cite="Conor MacNeill" image="/assets/img/faroes/conor_boat.jpg" wow="fadeInLeft" %}


[//]: # Teachers
{% include teachers.html %}


[//]: # Schedule
{% include schedule.html title="Faroe Islands Photography Adventure" byline="7 days, 7 nights. Fitness level: Easy" price="&pound;1500 per-person" bonus="" image="/assets/img/faroes/conor_lake_hike.jpg" schedule=site.data.faroes.may-2016.schedule %}


[//]: # Details
{% include workshop_details.html details=site.data.faroes.may-2016.details %}


{% comment %}
[//]: # Video
{% include video_embed.html title="Experience The Faroe Islands" description="Come and visit an almost untouched archipelago!" videotitle="The Faroe Islands" youtube="0ba1E_TXxUc" image="/assets/img/faroes/conor_coast_blur.jpg" %}
[//]: # Dan Quote
{% include quote.html quote="Dan Rubin, Dan Rubin, Dan Rubin, Dan Rubin. Dan Rubin." cite="Dan Rubin" image="/assets/img/faroes/dan-grass-coast-film.jpg" wow="fadeInRight" %}
[//]: # Sponsor
{% include sponsor.html sponsor=site.data.faroes.may-2016.sponsor image="/assets/img/faroes/dan-grass-coast-film.jpg" %}
{% endcomment %}


[//]: # Zoe Quote
{% include quote.html quote="The Faroe Islands are like no place I have ever been to before. The landscape blows my mind every time I visit - and gets under your skin so much you never want to leave." cite="Zoë Timmers" image="/assets/img/faroes/dan-grass-coast-film.jpg" wow="fadeInRight" %}

[//]: # Smartphones
{% include smartphones.html smartphones=site.data.faroes.may-2016.smartphones %}


[//]: # Greg Quote
{% include quote.html quote="Driving no more than an hour can get you to almost any corner of the archipelago; leaving more time to shoot!" cite="Greg Annandale" image="/assets/img/faroes/greg_drone_still.jpg" wow="fadeInLeft" %}


[//]: # FAQ
{% include faq.html faq=site.data.faroes.may-2016.faq %}

[//]: # VFI
{% include vfi.html %}

{% comment %}
[//]: # Gallery
{% include gallery.html photos=site.data.faroes.may-2016.gallery background="/assets/img/faroes/dan_huts.jpg" %}
{% endcomment %}

[//]: # BTS Gallery
{% include bts_gallery.html title="See what we got up to!" photos=site.data.faroes.may-2016.btsgallery background="/assets/img/faroes/dan_huts.jpg" instagram_hashtag="f8faroeislands" %}
