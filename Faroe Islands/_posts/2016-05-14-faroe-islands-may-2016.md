---
redirect_from: 	"/"

# BASICS
title: 			"Faroe Islands May 2016"
location: 		"The Faroe Islands"
hero: 			"Faroe Islands"
tagline: 		'Landscape photography &amp; <span class="phrase">post-processing workshop</span>'
description: 	"Experience The Faroe Islands untouched landscapes alongside experienced photographers. Then learn how to make your images look amazing."
permalink: 		/faroe-islands-may-2016/
endDate: 		2016-05-21
heroImage: 		/assets/img/faroes/saksun-x3.jpg
seller: 		"3 teachers, 7 days, 10 photographers."
social_image: 	/assets/img/faroes/social_image.jpg


#SPONSOR
sponsor: 		Olympus
sponsorImage: 	/assets/img/sponsors/olympus.png


# AVAILABILITY
published: 		true
status: 		confirmed
soldout: 		false


# BOOKING AND MAILING
tandc: 				"assets/docs/faroes/Faroe_Islands_May_2016_T&C.pdf"
tito: 				https://ti.to/thefella/faroe-islands-may-2016
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
  - upcoming
  

# LAYOUT
pageClass: 		"workshop faroe-islands faroe-islands-may-2016"
layout: 		workshop
---


[//]: # Intro
{% include intro.html intro=site.data.faroes.may-2016.intro %}


[//]: # Conor Quote
{% include quote.html quote="The Faroe Islands are so close, yet they feel like a completely different world!" cite="Conor MacNeill" image="/assets/img/faroes/conor_boat.jpg" wow="fadeInLeft" %}


[//]: # Teachers
{% include teachers.html teachers=site.data.teachers %}


[//]: # Schedule
{% include schedule.html title="Faroe Photography Adventure" price="&pound;1500 per-person" bonus="(Save &pound;250 by [booking](#booking) early!)" image="/assets/img/faroes/conor_lake_hike.jpg" schedule=site.data.faroes.may-2016.schedule %}


[//]: # Details
{% include workshop_details.html details=site.data.faroes.may-2016.details %}


[//]: # Video
{% include video_embed.html title="Experience The Faroe Islands" description="Come and visit an almost untouched archipelago!" videotitle="The Faroe Islands" youtube="0ba1E_TXxUc" image="/assets/img/faroes/conor_coast_blur.jpg" %}


{% comment %}
[//]: # Dan Quote
{% include quote.html quote="Dan Rubin, Dan Rubin, Dan Rubin, Dan Rubin. Dan Rubin." cite="Dan Rubin" image="/assets/img/faroes/dan-grass-coast-film.jpg" wow="fadeInRight" %}
{% endcomment %}


[//]: # Smartphones 
{% include smartphones.html smartphones=site.data.faroes.may-2016.smartphones %}


[//]: # Greg Quote
{% include quote.html quote="Driving no more than an hour can get you to almost any corner of the archipelago; leaving more time to shoot!" cite="Greg Annandale" image="/assets/img/faroes/greg_drone_still.jpg" wow="fadeInLeft" %}


[//]: # FAQ
{% include faq.html faq=site.data.faroes.may-2016.faq %}


[//]: # Gallery 
{% include gallery.html photos=site.data.faroes.may-2016.gallery background="/assets/img/faroes/dan_huts.jpg" %}
