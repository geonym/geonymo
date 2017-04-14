# GeonymoooOOOooo
Geonymo is a Web client using Geonym API.


## Purpose
This documentation was written for developpers.  
It describes:  
  . How to install Geonymo.  
  . How to setup Geonymo once installation is done.  
  . How to run Geonymo server.  
  . How to use Geonymo app.


## Geonymo Install

* Install NodeJS & npm tools from NodeJS PPA (6.x version)  
  <pre><code>cd ~
  curl -sL https://deb.nodesource.com/setup_6.x -o nodesource_setup.sh  
  sudo bash nodesource_setup.sh  
  sudo apt-get install nodejs</code></pre>

* Check NodeJS & NPM versions  
  <pre><code>nodejs -v  
    . Returned version must be >= to v6.9.4  
  npm -v  
    . Returned version must be >= 3.10.10</code></pre>

* Delete nodesource_setup.sh
  <pre><code>rm nodesource_setup.sh</code></pre>

* Go to folder where you want to install Geonym
* Clone Geonymo repo
  <pre><code>git clone https://github.com/geonym/geonymo</code></pre>


## Geonymo Setup

* Access Geonymo install folder
  <pre><code>cd geonymo</code></pre>
* Install dependencies
  <pre><code>npm install</code></pre>


## Run Geonymo server

* Boot the server
  <pre><code>npm start</code></pre>
* Open a browser and enter the following url: http://localhost:3001


## About

Fly
