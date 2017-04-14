# GeonymoooOOOooo
Geonymo is a Web client using Geonym API.


## Purpose
This documentation was written for developpers to run/develop some tests.
It describes:  
  . How to install Java8.
  . How to install & setup WebDriverIO.  
  . How to install selenium server.  
  . How to run Geonymo tests.  


## Java8 Install

1. Open a terminal and execute the following 3 commands:
<pre><code>sudo add-apt-repository ppa:webupd8team/java
sudo apt-get update
sudo apt-get install java-common oracle-java8-installer</code></pre>

2. During the installation process, you will need to accept the Oracle binary code license terms.

3. Once the installation is finished, you can check Java version with the following command:
<pre><code>java - version</code></pre>

4. The following 4 Java related environment variables should be automatically set once you installed Oracle Java 8 with PPA.  
  . $J2SDKDIR  
  . $J2REDIR  
  . $JAVA_HOME  
  . $DERBY_HOME

5. You can see their values using echo command like below.
<pre><code>echo $JAVA_HOME</code></pre>

6. If all variables are defined, like this output, everything is OK.
<pre><code>/usr/lib/jvm/java-8-oracle</code></pre>

7. If for any reason these environment variable isn’t set, then install oracle-java8-set-default package.
<pre><code>sudo apt-get install oracle-java8-set-default</code></pre>

8. This package will install a jdk.sh file under /etc/profile.d/ directory. If you take a look at this file, then you can see it’s used to set the above environment variables.
<pre><code>cat /etc/profile.d/jdk.sh</code></pre>

9. Output
<pre><code>export J2SDKDIR=/usr/lib/jvm/java-8-oracle
export J2REDIR=/usr/lib/jvm/java-8-oracle/jre
export PATH=$PATH:/usr/lib/jvm/java-8-oracle/bin:/usr/lib/jvm/java-8-oracle/db/bin:/usr/lib/jvm/java-8-oracle/jre/bin
export JAVA_HOME=/usr/lib/jvm/java-8-oracle
export DERBY_HOME=/usr/lib/jvm/java-8-oracle/db</code></pre>

10. We need to reload /etc/profile with the following command to let these environment variables take effect.
<pre><code>source /etc/profile</code></pre>

11. That's it. :-)

## WebDriverIO Install

1. Go to Geonymo install directory.

2. Create a test/tools/selenium-standalone-server directory & go inside.
<pre><code>mkdir -p test/tools/selenium-standalone-server
cd test/tools/selenium-standalone-server</code></pre>

3. Download latest selenium standalone server.
<pre><code>curl -O http://selenium-release.storage.googleapis.com/3.0/selenium-server-standalone-3.0.1.jar</code></pre>

4. Download the latest version geckdriver for your environment and unpack it in your project directory.
<pre><code>curl -L https://github.com/mozilla/geckodriver/releases/download/v0.11.1/geckodriver-v0.11.1-linux64.tar.gz | tar xz </code></pre>

5. Start selenium standalone server.
<pre><code>java -jar -Dwebdriver.gecko.driver=./geckodriver selenium-server-standalone-3.0.1.jar</code></pre>

6. Open a new terminal and go to Geonymo install directory.

7. Install WebdriverIO
<pre><code>npm install webdriverio --save-dev</code></pre>

8. Create a 'Test runner' config file
<pre><code>./node_modules/.bin/wdio config</code></pre>
A question interface pops up. It will help to create the config easy and fast. If you are not sure what to answer follow this answers:

  . Q: Where do you want to execute your tests?  
  . A: On my local machine

  . Q: Which framework do you want to use?  
  . A: mocha

  . Q: Shall I install the framework adapter for you?  
  . A: Yes (just press enter)

  . Q: Where are your test specs located?  
  . A: ./test/specs/*/.js (just press enter)

  . Q: Which reporter do you want to use?  
  . A: dot (just press space and enter)

  . Q: Shall I install the reporter library for you?  
  . A: Yes (just press enter)

  . Q: Do you want to add a service to your test setup?  
  . A: none (just press enter, let’s skip this for simplicity)

  . Q: Level of logging verbosity:  
  . A: silent (just press enter)

  . Q: In which directory should screenshots gets saved if a command fails?  
  . A: ./errorShots/ (just press enter)

  . Q: What is the base url?  
  . A: http://localhost (just press enter)

9. Create test/specs directory (from project directory)
<pre><code>mkdir -p test/specs</code></pre>

10. Create a test.js Test file into test/specs directory with the following content:
<pre><code>var assert = require('assert')
    describe('webdriver.io page', function () {
      it('should have the right title - the fancy generator way', function () {
        browser.url('http://webdriver.io')
        var title = browser.getTitle()
        assert.equal(title, 'WebdriverIO - Selenium 2.0 javascript bindings for nodejs')
      })
    })</code></pre>

11. Run the test server (from Geonymo install directory)
<pre><code>cd ..
cd ..
./node_modules/.bin/wdio wdio.conf.js
</code></pre>

12. That's it. :-)


## About

Fly
