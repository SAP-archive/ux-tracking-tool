# User research tracking tool for behavioral analysis

## Concept

###### What is it?
API written on Javascript.
###### Where is it used?
Javascript based prototypes.
###### Whom does it address?
Primarily UX Designers, UX Researchers, UX Prototypers.
###### Who will apply it?
Mainly UX Prototypers.
###### What is it used for?
For tracking the logs during a usability test session. By completing each usability test session, the script generates a file that is a detailed list of all user's interactions. This list can then be consumed in order to visualise the data and create comparable graphics.
###### What is the idea behind it?
To evaluate quicker prototypes. Under the allowance of the users, easily keep a detailed track of their actions that can be directly extracted and compared among all the usability sessions, in order to quickly evaluate the prototype.
###### What is the purpose of it?
To test and evaluate new interaction and design concepts before going to production.
###### What is the technical approach?
Independent from the JS framework used into the prototype.
###### How to take advantage of it?
Boost the prototype evaluation by its instant output.
* Compare the tracks between users to calculate average values.
* Compare the tracks with the expected values to calculate divergence.
* Compare the tracks of same user to interpret behavior.

## Download
###### What sources are needed?
You only need to load the ```api.min.js```that you can find in the current repository. You may also view it separately [here](https://github.com/SAP/ux-tracking-tool/blob/master/api.min.js).
###### How can it be loaded in a HTML prototype?
By embedding that single script in the home page. In your index.html file, go to the `<head>` part of the page and include the following main ```script``` tag:
```html
<script type="text/javascript" src="api.min.js" async onload="Init('')"></script>
```
###### Where is the testing script stored? 
For the needs of the tool, you keep the testing script of your usability sessions into a separate JSON file, the ```UseCaseData.json``` file. Create your testing script according to the template that is provided [here](https://github.com/SAP/ux-tracking-tool/blob/master/UseCaseData.json).     

Set then the path to this file as a parameter in the main function you call on the initial loading of the script: ```Init('childfolder/subchildfolder/')```      
In case the JSON file is located on the parent project folder, then set an empty string as parameter : ```Init('')```     

## List of available functions
###### How can it be used?     
By applying the functions given by the API. These functions can be triggered on certain events:

```javascript
UxBeginUseCase( [Target use case], [Trigger element] )
```
```javascript
UxCompleteUseCase( [Target use case], [Trigger element]  )
```
```javascript
UxBeginAction( [Target use case], [Target action], [Trigger element] )
```
```javascript
UxCompleteAction( [Target use case], [Target action], [Trigger element] )
```
```javascript
UxBeginStep( [Target use case], [Target action], [Target step], [Trigger element] )
```
```javascript
UxCompleteStep( [Target use case], [Target action], [Target step], [Trigger element] )
```
```javascript
UxSetInteraction( [Trigger element] )
```
```javascript
UxCompleteSession()
```

```Target action```, ```Target step``` are the ID's from the UseCaseData.json file.

## Usage
#### API flow
###### Use Case dependent
Make use of the API functions having on mind the following order:     
* UxBeginUseCase(0, "Button O");
   * UxBeginAction(0, "Button X");
       * UxBeginStep(0, 0, "Button Y");
       * UxCompleteStep(0, 0, "Button A");
       * UxBeginStep(0, 1, "Button B");
       * UxCompleteStep(0 , 1, "Button L1");
       * ...
   * UxCompleteAction(0, "Button L2");
   * UxBeginAction(1, "Button R1");
       * UxBeginStep(1, 0, "Button R2");
       * UxCompleteStep(1, 0, "Button L3");
   * UxCompleteAction(1, Button R3");
   * ...
* UxCompleteUseCase(0, "Button O");

###### Use Case independent (pending feature)
A version will be released soon that will allow use case independent use of the API, but with loss of all rich metadata that relate the use cases tested. Make use of two of the API functions having on mind the following order:
* UxSetInteraction("Button X");
* UxSetInteraction("Button Y");
* UxSetInteraction("Button A");
* ...
* UxCompleteSession("Button B");

#### Algorithm

The algorithm of the tool will strictly follow the order presented above. A step can be started only if the previous step has been completed; an action can be completed, if all of its content steps have been completed. In the same way, a use case is considered as completed, if all actions have been executed. Only then the tool will generate a ```CSV``` file that will be exported. The ```UxSetInteraction()``` function can be used at any point of this order.

The reason for this approach is to keep the intregrity of the results of the usability tests with respect to the use cases that will be provided as a measuring basis.

## Demo
Visit the following demo page that is also included in the repository and open the console of your browser to view the logs that the tool prints. Find the demo page [here](https://sap.github.io/ux-tracking-tool/demo).

## Copyright and license

Copyright (c) 2017 SAP SE or an SAP affiliate company. All rights reserved. 

Except as provided below, this software is licensed under the Apache License, Version 2.0 (the "License"); you may not use this software except in compliance with the License.You may obtain a copy of the License at:

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
