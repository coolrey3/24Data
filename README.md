# 24Data Website Recreation

## The Proccess
This Project was intended as a skill test and the outline was to re-create the website from the images provided. I decided to start with the html and css and downloaded bootstrap to my environment to start the general wireframe. 

I began by styling the page for desktop before then moving on with the mobile view. Because the mobile view did not require removing too many elements this seemed like a fine path to take. If the site was more feature rich in mobile, I would have considered designing for mobile first. 

After most of the styling was complete I moved on to the form validation. At first I attempted to use the Jquery validator for the logic but was running in to styling issues due to glyphicon not being integrated in to bootstrap 4.

I was able to get it to work by linking the src to bootstrap files via a CDN but it severely altered my styling and made it tough to use the validator without troubleshooting a lot of CSS issues.

Because of this, I decided to apply the validation styling solely via CSS and just use the JQuery validator to add more details to the error messages.

I wrapped up my project by concatenating and minifying all my files and images and uploaded this repo to easily browse the code. 

## Tools Used
##### -Node / Grunt / 
##### -BootStrap 4 
##### -Sass
##### -JQuery - JQuery validation 
##### -iloveimg.com 

## Highlights
Ran in to interesting issues when trying to use glyphicons and bootstrap 4 in local environment

## Issues Encountered
When doing the form validation I ran in to an issue using glyphicons and had to scrap the original method of form validation I was using. Also ran in to issues getting boostrap to display correctly on the tablet view at exactly 768 pixels. Resizes correctly below that.

## Next Steps
If I were to hand the code off I would organize the Sass files to follow the SMACSS file structure and change the method used for displaying the Skills Test text when changing between viewport sizes. I would also add more validation checks before the submission success message is displayed.