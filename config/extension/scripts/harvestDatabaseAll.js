<import resource="classpath:alfresco/module/org.alfresco.reporting/scripts/harvestDatabase.lib.js">

/**
 * Copyright (C) 2011 - 2013 Alfresco Business Reporting project
 * 
 * This file is part of the Alfresco Business Reporting project.
 * 
 * Licensed under the GNU LGPL, Version 3.0 (the "License"); you may not use
 * this file except in compliance with the License. You may obtain a copy of the
 * License at
 * 
 * http://www.gnu.org/licenses/lgpl.html
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

var harvestRef = args["noderef"];
try{
	if (null==harvestRef){
		main(null, "all");
	} else {
		main(harvestRef, "");
	}
} catch (whatever){
// do nothing
} finally {
	var goBack = "<script>history.back();</script>";
	goBack;
}
