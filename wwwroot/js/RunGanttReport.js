    <link rel="stylesheet" href="https://projectmadeeasy.sharepoint.com/sites/Development/Site%20Assets/Resource%20AnalyzerHR/GanttSupport/jsuites.css" type="text/css" />
      <link rel="stylesheet" href="https://projectmadeeasy.sharepoint.com/sites/Development/Site%20Assets/Resource%20AnalyzerHR/GanttSupport/2019.2.619.kendo.common.min.css"/>
      <link rel="stylesheet" href="https://projectmadeeasy.sharepoint.com/sites/Development/Site%20Assets/Resource%20AnalyzerHR/GanttSupport/2019.2.619.kendo.rtl.min.css"/>
      <link rel="stylesheet" href="https://projectmadeeasy.sharepoint.com/sites/Development/Site%20Assets/Resource%20AnalyzerHR/GanttSupport/2019.2.619.kendo.silver.min.css"/>
      <link rel="stylesheet" href="https://projectmadeeasy.sharepoint.com/sites/Development/Site%20Assets/Resource%20AnalyzerHR/GanttSupport/jexcel.css" type="text/css" />
      <script type="text/javascript" src="https://projectmadeeasy.sharepoint.com/sites/Development/Site%20Assets/Resource%20AnalyzerHR/GanttSupport/jquery-3.4.1.js"></script>
      <script src="https://projectmadeeasy.sharepoint.com/sites/Development/Site%20Assets/Resource%20AnalyzerHR/GanttSupport/jquery.min.js"></script>
      <script src="https://projectmadeeasy.sharepoint.com/sites/Development/Site%20Assets/Resource%20AnalyzerHR/GanttSupport/select2.full.js"></script>
      <script src="https://projectmadeeasy.sharepoint.com/sites/Development/Site%20Assets/Resource%20AnalyzerHR/GanttSupport/jexcel.js"></script>
      <script src="https://projectmadeeasy.sharepoint.com/sites/Development/Site%20Assets/Resource%20AnalyzerHR/GanttSupport/jsuites.js"></script>     
      <script src="https://projectmadeeasy.sharepoint.com/sites/Development/Site%20Assets/Resource%20AnalyzerHR/GanttSupport/2019.2.619.kendo.all.min.js"></script>
      <link rel="stylesheet" href="https://projectmadeeasy.sharepoint.com/sites/Development/Site%20Assets/Resource%20AnalyzerHR/GanttSupport/select2.css"/>
      <script src="https://projectmadeeasy.sharepoint.com/sites/Development/Site%20Assets/Resource%20AnalyzerHR/GanttSupport/loadingoverlay.min.js"></script>
      <script src="https://projectmadeeasy.sharepoint.com/sites/Development/Site%20Assets/Resource%20AnalyzerHR/GanttSupport/chosen.jquery.min.js"></script>
      <link rel="stylesheet" href="https://projectmadeeasy.sharepoint.com/sites/Development/Site%20Assets/Resource%20AnalyzerHR/GanttSupport/chosen.min.css">
  
	
<style>
.ms-webpartPage-root {
    border-spacing: 0px !important;
}
 .jexcel > thead > tr > td {
            /*background-color: #eeeeee !important*/;
            background-image: none, linear-gradient(to bottom, rgba(255, 255, 255, 0.45) 0px, rgba(255, 255, 255, 0) 100%);
            background-position: 50% 50%;
            background-color: white !important;
            color: black !important;
            border-width: 1px;
            word-break: break-word !important;
            text-align: center !important;
            height: 35px;
        }
		
		 .jexcel > tbody > tr > td {
            /*border-color: #000 !important;*/
            border-color: #bbdceb !important;
            color: #00435e;
			height: 35px;
        }   
		.jexcel > tbody > tr > td.readOnly {
            /*border-color: #000 !important;*/
            
            color: #90a7ab !important;
        }
		
		 /* .jexcel > tbody > tr:nth-child(even) {
           border-color: #000 !important;
            background-color: #f2f2f2;
        }*/
		.rollupheader
		{
			background-color: #dcf9fd;
		}
		.clsOptiondefault
		{
			color: lightgrey;
		}
		
		.jdropdown-content > jdropdown-item:nth-child(even) {
            /*border-color: #000 !important;*/
            background-color: #f2f2f2;
        }
		
		 .jexcel > tbody > tr:hover {
			  background-image: none, linear-gradient(to bottom, rgba(255, 255, 255, 0.45) 0px, rgba(255, 255, 255, 0) 100%);
			   background-position: 50% 50%;
				background-color: #dcf9fd;
				color: black;
				 border-width: 1px;
            word-break: break-word !important;
            text-align: center !important;
				}
				
				.k-gantt-create,.k-gantt-views
				{
					display:none;
				}
				.legend .idearow { background-color: white; }
				.legend .projectrow { background-color: #f2f2f2; }

</style>
      <style>
	  .legend { list-style: none; }
.legend li { float: left; margin-right: 0px; }
.legend span { border: 1px solid black; float: left; width: 16px; height: 16px; margin: 2px; }
	  .legend .idearow { background-color: white; }
		.legend .projectrow { background-color: #f2f2f2; }
         .icon {
         vertical-align: bottom;
         margin-top: 2px;
         margin-bottom: 3px;
         cursor: pointer;
         }
         .icon:active {
         opacity: .5;
         }
         .demo.button input {
         margin-right: 2px;
         }
         .demo.button .ui-button-text {
         padding: .4em .6em;
         line-height: 0.8;
         }
         input[type='text'] {
         width: 60px;
         }
		 .jexcel > thead > tr > td {
			 background-color: white !important;
			 color: Black !important;
			 border: 1px solid #d0c6c6!important;
			 z-index:0!important;
		 }
		 .jexcel>tbody>tr>td {
				border: 1px solid #d0c6c6!important;
			}
			#filtercontainer { 
  
  text-align: justify;
  -ms-text-justify: distribute-all-lines;
  text-justify: distribute-all-lines;
  /* just for demo */
  min-width: 612px;
}
	.margincontrols

margin-left: 5px;	{
	}		
      </style>
	   
	    <div id="maindiv"><div style="display:none;">
	   <label>Start<span style="color:red;font-weight:bold">*</span>:</label> <input id="start" /><label>End<span style="color:red;font-weight:bold">*</span>:</label><input id="end"  /></div> <b><label>Select Idea(s):  </label></b><span style="color:red;font-weight:bold">*</span>:
	  <select id="drp_resources" data-placeholder="Select Idea(s)" class="chosen-select"  onchange="filterDropdown()" multiple  tabindex="4"  style="height:30px;width:200px; border-radius:5px;"> </select> <br>
	  <p style="display:none;"> Select Grouping<span style="color:red;font-weight:bold">*</span>: <INPUT TYPE="Radio" Name="GroupingData" Value="Resource">Resource<INPUT TYPE="Radio" Name="GroupingData" Value="ResourceType">Resource Type </p>
	 
	 <div id="filtercontainer">
	 
	 <table>
	  <ul id="legendul" style="display:none;" class="legend">
			<li><span class="idearow"></span><b> Ideas</b></li><br>
			<li><span class="projectrow"></span><b> Projects</b></li>
		</ul>
	 <tr>
		 <td><b><label class="margincontrols">GBU:  </label></b></td>
		 <td style="padding-left:6px"><b><label class="margincontrols">Location:  </label></b></td>
		 <td style="padding-left:6px"><b><label class="margincontrols">Supervisor:  </label></b></td>
		 <td style="padding-left:6px"><b><label class="margincontrols">BU Owner:  </label></b></td>
		 <td style="padding-left:6px"><b><label class="margincontrols">Hire Status:  </label></b></td>
		 <td></td><td></td>
	 </tr>
	 <tr>
	   <td><select id="ddl_GBU" data-placeholder="GBU" class="chosen-select ddlFilters"    tabindex="4"  style="height:30px; border-radius:5px;" onchange="cascadePara4()"> </select> </td>
		   <td style="padding-left:6px"><select id="ddl_Location" data-placeholder="Location" class="chosen-select ddlFilters"    tabindex="4"  style="height:30px; border-radius:5px;" onchange="cascadePara1()" > </select> </td>
		   <td style="padding-left:6px"><select id="ddl_Organization" data-placeholder="Supervisor" class="chosen-select ddlFilters"    tabindex="4"  style="height:30px; border-radius:5px;" onchange="cascadePara2()"> </select></td>
		   <td style="padding-left:6px"><select id="ddl_BUOwner" data-placeholder="BUOwner" class="chosen-select ddlFilters"    tabindex="4"  style="height:30px; border-radius:5px;" onchange="cascadePara3()"> </select>  	    </td>
		   <td style="padding-left:6px"><select id="ddl_HireStatus" data-placeholder="Hire Status" class="chosen-select ddlFilters"    tabindex="4"  style="height:30px; border-radius:5px;" onchange="cascadePara5()"> </select>  </td>	  
		   <td style="padding-left:6px"><input type="button" value="Analyze" onclick="getGridDataClickWithFilters()" style="margin:5px; margin-left:0px !important;margin-right:0px !important;" ></td>
		  <td style="padding-left:6px"><input type="button" value="Reset" onclick="setFilterReset()" style="margin:5px; margin-left:0px !important;" ></td>
	 
	 </tr>
	 
		 </table>
	  </div>
	 <!--  <input type="checkbox" id="chkProjectResources"  onchange="ShowOnlySelectedRows()" >Project Resources  <input type="checkbox" id="chkShowALL" onchange="ShowAllGanttGrid()" >Show All  <input type="button" value="Commit All" onclick="CommitAllChangeproject()" style="margin:5px;">--> 
		<span id='message' style='color: red;'></span>
	 </div>
	 <div id='accessmsg'   style='color:red;'><span style="display:none"  style='color:red;'>Access Denied*</span></div>
	  <div>
	    <div id="example">
    <div id="gantt"></div>
	<div id="ganttGrid"></div>
	</div>
  <script>
	function getParameterByName(name) {
                    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                    results = regex.exec(location.search.toLowerCase());
                    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
                }
  </script>
   <script>
      
     
    </script>

 
    <script>
	
	
	var GridGantt=[];
	var GridGanttIndex=0;
	var GridTPhase=[];
	var GridTPhaseIndex=0;
	var GridGrid=[];
	var GridGridIndex=0;
	var Gridtable;
	var OutputResponseTable;
	var OutputResponseTable1;
	var OutputResponseTable_Group;
	var arr_GroupName=[];
	var arr_GroupName_Count=[];
	
	var GanttStart;
	var GanttFinish;
	
	var NewGanttStart;
	var NewGanttFinish;
	
	var GanttGridView_lbl=[];
	var GanttGridView_State=[];
	
	var ChangedProject
var ChangedProjectStart
var ChangedProjectStartNew
var ChangedProjectEnd
var ChangedProjectEndNew
	
	var monthNames = [
                      "Jan", "Feb", "Mar",
                      "Apr", "May", "Jun", "Jul",
                      "Aug", "Sep", "Oct",
                      "Nov", "Dec"
         ]
		 var monthNamesFull = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		 
	function changeDate(e) {
	var curElemID = e.sender.element.context.id ;
	switch(curElemID)
	{
		case "start" || "end":
		if ($(this.element).is("#start")) {
		 //  $("#end").data("kendoDatePicker").setOptions({ min: this.value() });
		}
		else 
		{
			$("#start").data("kendoDatePicker").setOptions({ max: this.value() });
		}
		break;						
		default: break;
	}
  }	 
		 
	var deletEngagenetarray=[];	

	var arr_ProjectNo=[];
	var arr_ProjectStart=[];
	var arr_ProjectFinish=[]
	
	$(document).ready(function () {
/* 
setTimeout(function(){

var html="<ul id='legendul' style='display:none;' class='legend'>"+"<li class='static'>"+"<li><span class='idearow' style='margin-left:28px'></span><b> Ideas</b></li><br><br>"+
			"<li><span class='projectrow' style='margin-left:28px'></span><b> Projects</b></li>"+
			"</ul></li>";
			
			$("#zz14_RootAspMenu").after(html)

}, 2000);


	arr_ProjectNo=[]
	arr_ProjectStart=[];
	arr_ProjectFinish=[]
	
	$("#start").kendoDatePicker({
			change: changeDate,
			  start: "year",
			depth: "year",
			  format: "MMMM yyyy",
			value :"MM YYYY"
	   });
	   var datePicker = $("#start").data("kendoDatePicker");
		var todayDate = new Date(); 
			todayDate.setMonth(todayDate.getMonth() - 1); 		
		datePicker.value(todayDate);
		datePicker.trigger("change");

	 $("#end").kendoDatePicker({
			change: changeDate,
			  start: "year",
			depth: "year",
			  format: "MMMM yyyy",
			value :"MM YYYY"
	   });
	   
	   var datePicker2 = $("#end").data("kendoDatePicker");
		var todayDate2 = new Date();  
		var dt = new Date(todayDate2.setMonth( todayDate2.getMonth() + 25 ));
		datePicker2.value(dt);
		datePicker2.trigger("change");
	   
	    var datePicker = $("#start").data("kendoDatePicker");
var todayDate = new Date();   
todayDate.setMonth(todayDate.getMonth() - 1); 	                                
datePicker.value(todayDate);
datePicker.trigger("change");
	
		    $.ajax({        	       // https://projectmadeeasy.sharepoint.com/sites/pwa/_api/ProjectData/Resources?$Select=ResourceId,ResourceName,PrimaryJobRole
                              url: 'https://pmeasyapplictionrd.azurewebsites.net/Api/GanttUpdated_ProjectList/9FA7C3AC-3564-4836-9A50-8951792AF1B4/1 2020/2 2020',                              
							  type: 'GET',
                              async: false,
                              processData: false,
                              cache: false,              
                              contentType: false,
                              dataType: 'json',
                              success: function (data) {
								  
								 
								  
                               debugger;	
							    OutputResponseTable
								OutputResponseTable1
							   var ResponseTable= JSON.parse(data)
							  
							  var Ldata =[];
							  var Ddata =[];
							  
							  var GanttData = ResponseTable.Table;
							  strOptions=""
							  
							  for (var i = 0; i < GanttData.length; i++) 
							  {							
								 strOptions = strOptions + "<option  value='" + GanttData[i].Projectuid + "' >" + GanttData[i].ProjectName + "</option>";
								 arr_ProjectNo.push(GanttData[i].Projectuid)
								 arr_ProjectStart.push(GanttData[i].Start)
								 arr_ProjectFinish.push(GanttData[i].Finish)
								 
							  }	
							strOptions="<option  value=''></option>" + strOptions;
							$("#drp_resources").text("");
							$("#drp_resources").append(strOptions);
							//$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "150px",});
							$("#drp_resources").chosen({no_results_text: "Oops, nothing found!",width: "50%",}); 	
							 							  
							
                              },
                              error: function (err) {
								alert(err);
                              }
                          });         	
	
	
		$("#ddl_Organization").text("");
							$("#ddl_Organization").append("<option class='clsOptiondefault' value='1'>Select Supervisor</option>");
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",});
							$("#ddl_Organization").trigger("chosen:updated");
							
							$("#ddl_GBU").text("");
							$("#ddl_GBU").append("<option   value='1'>Select GBU</option>");
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "80px",});
							$("#ddl_GBU").trigger("chosen:updated");
							
							$("#ddl_Location").text("");
							$("#ddl_Location").append("<option   value='1'>Select Location</option>");
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",});
							$("#ddl_Location").trigger("chosen:updated"); 	

							$("#ddl_BUOwner").text("");
							$("#ddl_BUOwner").append("<option   value='1'>Select BU Owner</option>");
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",});
							$("#ddl_BUOwner").trigger("chosen:updated");
							
							$("#ddl_HireStatus").text("");
							$("#ddl_HireStatus").append("<option   value='1'>Hire Status</option>");
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",});
							$("#ddl_HireStatus").trigger("chosen:updated"); 
	if(1==0){
			    $.ajax({        	
			
                              url: 'https://pmeasyapplictionrd.azurewebsites.net/Api/GanttUpdated_ParameterList/9FA7C3AC-3564-4836-9A50-8951792AF1B4/1 2020/2 2020',                              
							  type: 'GET',
                              async: false,
                              processData: false,
                              cache: false,              
                              contentType: false,
                              dataType: 'json',
                              success: function (data) {
								
							   var ResponseTable= JSON.parse(data)
							  
							  var Organizationdata ="";
							  var Locationdata ="";
							  var GBUdata ="";
							  var Ddata =[];
							  
							  var ParaData = ResponseTable.Table;
							  strOptions=""
							  
							  for (var i = 0; i < ParaData.length; i++) 
							  {	
								 if(ParaData[i].ParameterText=="Organization" )
								 {
								 Organizationdata = Organizationdata + "<option  value='" + ParaData[i].ParameterValue + "' >" + ParaData[i].ParameterValue + "</option>";
								 }
								 if(ParaData[i].ParameterText=="ResourceGBU" )
								 {
								 GBUdata = GBUdata + "<option  value='" + ParaData[i].ParameterValue + "' >" + ParaData[i].ParameterValue + "</option>";
								 }
								 if(ParaData[i].ParameterText=="ResourceLocation" )
								 {
								 Locationdata = Locationdata + "<option  value='" + ParaData[i].ParameterValue + "' >" + ParaData[i].ParameterValue + "</option>";
								 }
								
								 
							  }	
							Organizationdata="<option  value=''></option>" + Organizationdata;
							GBUdata="<option  value=''></option>" + GBUdata;
							Locationdata="<option  value=''></option>" + Locationdata;
							
							$("#ddl_Organization").text("");
							$("#ddl_Organization").append(Organizationdata);
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",});
							$("#ddl_Organization").trigger("chosen:updated");
							
							$("#ddl_GBU").text("");
							$("#ddl_GBU").append(GBUdata);
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "80px",});
							$("#ddl_GBU").trigger("chosen:updated");
							
							$("#ddl_Location").text("");
							$("#ddl_Location").append(Locationdata);
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",});
							$("#ddl_Location").trigger("chosen:updated"); 							  
							
                              },
                              error: function (err) {
								alert(err);
                              }
                          });  
	
	} */
	
	ExecuteOrDelayUntilScriptLoaded(IsCurrentUserMemberOfGroup, "sp.js");
	
});

var userInGroup;

function IsCurrentUserMemberOfGroup() {
var  mygroup  = "PME Resource Analyzer";
        var currentContext = new SP.ClientContext.get_current();
        var currentWeb = currentContext.get_web();
        var currentUser = currentContext.get_web().get_currentUser();
        currentContext.load(currentUser);
        var allGroups = currentWeb.get_siteGroups();
        currentContext.load(allGroups);
        var group = allGroups.getByName(mygroup);
        currentContext.load(group);
        var groupUsers = group.get_users();
        currentContext.load(groupUsers);
        currentContext.executeQueryAsync(OnSuccess, OnFailure);
        function OnSuccess(sender, args) {
            var groupUserEnumerator = groupUsers.getEnumerator();
            while (groupUserEnumerator.moveNext()) {
                var groupUser = groupUserEnumerator.get_current();
                if (groupUser.get_id() == currentUser.get_id()) {
                    userInGroup = true;
                    break;
                }
            }

            if (userInGroup) {
				var userID   = _spPageContextInfo.userId;
				$("#accessmsg").hide();
				 $("#accessmsg").text("");
				$("#maindiv").show();
							
setTimeout(function(){

var html="<ul id='legendul' style='display:none;' class='legend'>"+"<li class='static'>"+"<li><span class='idearow' style='margin-left:28px'></span><b> Ideas</b></li><br><br>"+
			"<li><span class='projectrow' style='margin-left:28px'></span><b> Projects</b></li>"+
			"</ul></li>";
			
			$("#zz14_RootAspMenu").after(html)

}, 2000);


	arr_ProjectNo=[]
	arr_ProjectStart=[];
	arr_ProjectFinish=[]
	
	$("#start").kendoDatePicker({
			change: changeDate,
			  start: "year",
			depth: "year",
			  format: "MMMM yyyy",
			value :"MM YYYY"
	   });
	   var datePicker = $("#start").data("kendoDatePicker");
		var todayDate = new Date(); 
			todayDate.setMonth(todayDate.getMonth() - 1); 		
		datePicker.value(todayDate);
		datePicker.trigger("change");

	 $("#end").kendoDatePicker({
			change: changeDate,
			  start: "year",
			depth: "year",
			  format: "MMMM yyyy",
			value :"MM YYYY"
	   });
	   
	   var datePicker2 = $("#end").data("kendoDatePicker");
		var todayDate2 = new Date();  
		var dt = new Date(todayDate2.setMonth( todayDate2.getMonth() + 25 ));
		datePicker2.value(dt);
		datePicker2.trigger("change");
	   
	    var datePicker = $("#start").data("kendoDatePicker");
var todayDate = new Date();   
todayDate.setMonth(todayDate.getMonth() - 1); 	                                
datePicker.value(todayDate);
datePicker.trigger("change");
	
		    $.ajax({        	       // https://projectmadeeasy.sharepoint.com/sites/pwa/_api/ProjectData/Resources?$Select=ResourceId,ResourceName,PrimaryJobRole
                              url: 'https://allocationgrid.azurewebsites.net/Api/GanttUpdated_ProjectList/9FA7C3AC-3564-4836-9A50-8951792AF1B4/1 2020/2 2020',                              
							  type: 'GET',
                              async: false,
                              processData: false,
                              cache: false,              
                              contentType: false,
                              dataType: 'json',
                              success: function (data) {
								  
								 
								  
                               debugger;	
							    OutputResponseTable
								OutputResponseTable1
							   var ResponseTable= JSON.parse(data)
							  
							  var Ldata =[];
							  var Ddata =[];
							  
							  var GanttData = ResponseTable.Table;
							  strOptions=""
							  
							  for (var i = 0; i < GanttData.length; i++) 
							  {							
								 strOptions = strOptions + "<option  value='" + GanttData[i].Projectuid + "' >" + GanttData[i].ProjectName + "</option>";
								 arr_ProjectNo.push(GanttData[i].Projectuid)
								 arr_ProjectStart.push(GanttData[i].Start)
								 arr_ProjectFinish.push(GanttData[i].Finish)
								 
							  }	
							strOptions="<option  value=''></option>" + strOptions;
							$("#drp_resources").text("");
							$("#drp_resources").append(strOptions);
							//$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "150px",});
							$("#drp_resources").chosen({no_results_text: "Oops, nothing found!",width: "50%",}); 	
							 							  
							
                              },
                              error: function (err) {
								alert(err);
                              }
                          });         	
	
	
		$("#ddl_Organization").text("");
							$("#ddl_Organization").append("<option class='clsOptiondefault' value='1'>Select Supervisor</option>");
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",});
							$("#ddl_Organization").trigger("chosen:updated");
							
							$("#ddl_GBU").text("");
							$("#ddl_GBU").append("<option   value='1'>Select GBU</option>");
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "80px",});
							$("#ddl_GBU").trigger("chosen:updated");
							
							$("#ddl_Location").text("");
							$("#ddl_Location").append("<option   value='1'>Select Location</option>");
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",});
							$("#ddl_Location").trigger("chosen:updated"); 	

							$("#ddl_BUOwner").text("");
							$("#ddl_BUOwner").append("<option   value='1'>Select BU Owner</option>");
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",});
							$("#ddl_BUOwner").trigger("chosen:updated");
							
							$("#ddl_HireStatus").text("");
							$("#ddl_HireStatus").append("<option   value='1'>Hire Status</option>");
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",});
							$("#ddl_HireStatus").trigger("chosen:updated"); 
	if(1==0){
			    $.ajax({        	
			
                              url: 'https://allocationgrid.azurewebsites.net/Api/GanttUpdated_ParameterList/9FA7C3AC-3564-4836-9A50-8951792AF1B4/1 2020/2 2020',                              
							  type: 'GET',
                              async: false,
                              processData: false,
                              cache: false,              
                              contentType: false,
                              dataType: 'json',
                              success: function (data) {
								
							   var ResponseTable= JSON.parse(data)
							  
							  var Organizationdata ="";
							  var Locationdata ="";
							  var GBUdata ="";
							  var Ddata =[];
							  
							  var ParaData = ResponseTable.Table;
							  strOptions=""
							  
							  for (var i = 0; i < ParaData.length; i++) 
							  {	
								 if(ParaData[i].ParameterText=="Organization" )
								 {
								 Organizationdata = Organizationdata + "<option  value='" + ParaData[i].ParameterValue + "' >" + ParaData[i].ParameterValue + "</option>";
								 }
								 if(ParaData[i].ParameterText=="ResourceGBU" )
								 {
								 GBUdata = GBUdata + "<option  value='" + ParaData[i].ParameterValue + "' >" + ParaData[i].ParameterValue + "</option>";
								 }
								 if(ParaData[i].ParameterText=="ResourceLocation" )
								 {
								 Locationdata = Locationdata + "<option  value='" + ParaData[i].ParameterValue + "' >" + ParaData[i].ParameterValue + "</option>";
								 }
								
								 
							  }	
							Organizationdata="<option  value=''></option>" + Organizationdata;
							GBUdata="<option  value=''></option>" + GBUdata;
							Locationdata="<option  value=''></option>" + Locationdata;
							
							$("#ddl_Organization").text("");
							$("#ddl_Organization").append(Organizationdata);
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",});
							$("#ddl_Organization").trigger("chosen:updated");
							
							$("#ddl_GBU").text("");
							$("#ddl_GBU").append(GBUdata);
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "80px",});
							$("#ddl_GBU").trigger("chosen:updated");
							
							$("#ddl_Location").text("");
							$("#ddl_Location").append(Locationdata);
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",});
							$("#ddl_Location").trigger("chosen:updated"); 							  
							
                              },
                              error: function (err) {
								alert(err);
                              }
                          });  
	
	}
			}
					else 
				{	
					userInGroup = false;
					//$("#MSOZoneCell_WebPartWPQ4").hide();
					
					$("#maindiv").hide();
					$("#accessmsg").show();
					$("#accessmsg").text("Access Denied*");


					
					
				}
		}
         function OnFailure(sender, args) {
			 userInGroup = false;
			 $("#accessmsg").hide();
			 $("#accessmsg").text("");
			 $("#maindiv").show();
			// $("#MSOZoneCell_WebPartWPQ4").show();
			 
setTimeout(function(){

var html="<ul id='legendul' style='display:none;' class='legend'>"+"<li class='static'>"+"<li><span class='idearow' style='margin-left:28px'></span><b> Ideas</b></li><br><br>"+
			"<li><span class='projectrow' style='margin-left:28px'></span><b> Projects</b></li>"+
			"</ul></li>";
			
			$("#zz14_RootAspMenu").after(html)

}, 2000);


	arr_ProjectNo=[]
	arr_ProjectStart=[];
	arr_ProjectFinish=[]
	
	$("#start").kendoDatePicker({
			change: changeDate,
			  start: "year",
			depth: "year",
			  format: "MMMM yyyy",
			value :"MM YYYY"
	   });
	   var datePicker = $("#start").data("kendoDatePicker");
		var todayDate = new Date(); 
			todayDate.setMonth(todayDate.getMonth() - 1); 		
		datePicker.value(todayDate);
		datePicker.trigger("change");

	 $("#end").kendoDatePicker({
			change: changeDate,
			  start: "year",
			depth: "year",
			  format: "MMMM yyyy",
			value :"MM YYYY"
	   });
	   
	   var datePicker2 = $("#end").data("kendoDatePicker");
		var todayDate2 = new Date();  
		var dt = new Date(todayDate2.setMonth( todayDate2.getMonth() + 25 ));
		datePicker2.value(dt);
		datePicker2.trigger("change");
	   
	    var datePicker = $("#start").data("kendoDatePicker");
var todayDate = new Date();   
todayDate.setMonth(todayDate.getMonth() - 1); 	                                
datePicker.value(todayDate);
datePicker.trigger("change");
	
		    $.ajax({        	       // https://projectmadeeasy.sharepoint.com/sites/pwa/_api/ProjectData/Resources?$Select=ResourceId,ResourceName,PrimaryJobRole
                              url: 'https://allocationgrid.azurewebsites.net/Api/GanttUpdated_ProjectList/9FA7C3AC-3564-4836-9A50-8951792AF1B4/1 2020/2 2020',                              
							  type: 'GET',
                              async: false,
                              processData: false,
                              cache: false,              
                              contentType: false,
                              dataType: 'json',
                              success: function (data) {
								  
								 
								  
                               debugger;	
							    OutputResponseTable
								OutputResponseTable1
							   var ResponseTable= JSON.parse(data)
							  
							  var Ldata =[];
							  var Ddata =[];
							  
							  var GanttData = ResponseTable.Table;
							  strOptions=""
							  
							  for (var i = 0; i < GanttData.length; i++) 
							  {							
								 strOptions = strOptions + "<option  value='" + GanttData[i].Projectuid + "' >" + GanttData[i].ProjectName + "</option>";
								 arr_ProjectNo.push(GanttData[i].Projectuid)
								 arr_ProjectStart.push(GanttData[i].Start)
								 arr_ProjectFinish.push(GanttData[i].Finish)
								 
							  }	
							strOptions="<option  value=''></option>" + strOptions;
							$("#drp_resources").text("");
							$("#drp_resources").append(strOptions);
							//$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "150px",});
							$("#drp_resources").chosen({no_results_text: "Oops, nothing found!",width: "50%",}); 	
							 							  
							
                              },
                              error: function (err) {
								alert(err);
                              }
                          });         	
	
	
		$("#ddl_Organization").text("");
							$("#ddl_Organization").append("<option class='clsOptiondefault' value='1'>Select Supervisor</option>");
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",});
							$("#ddl_Organization").trigger("chosen:updated");
							
							$("#ddl_GBU").text("");
							$("#ddl_GBU").append("<option   value='1'>Select GBU</option>");
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "80px",});
							$("#ddl_GBU").trigger("chosen:updated");
							
							$("#ddl_Location").text("");
							$("#ddl_Location").append("<option   value='1'>Select Location</option>");
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",});
							$("#ddl_Location").trigger("chosen:updated"); 	

							$("#ddl_BUOwner").text("");
							$("#ddl_BUOwner").append("<option   value='1'>Select BU Owner</option>");
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",});
							$("#ddl_BUOwner").trigger("chosen:updated");
							
							$("#ddl_HireStatus").text("");
							$("#ddl_HireStatus").append("<option   value='1'>Hire Status</option>");
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",});
							$("#ddl_HireStatus").trigger("chosen:updated"); 
	if(1==0){
			    $.ajax({        	
			
                              url: 'https://allocationgrid.azurewebsites.net/Api/GanttUpdated_ParameterList/9FA7C3AC-3564-4836-9A50-8951792AF1B4/1 2020/2 2020',                              
							  type: 'GET',
                              async: false,
                              processData: false,
                              cache: false,              
                              contentType: false,
                              dataType: 'json',
                              success: function (data) {
								
							   var ResponseTable= JSON.parse(data)
							  
							  var Organizationdata ="";
							  var Locationdata ="";
							  var GBUdata ="";
							  var Ddata =[];
							  
							  var ParaData = ResponseTable.Table;
							  strOptions=""
							  
							  for (var i = 0; i < ParaData.length; i++) 
							  {	
								 if(ParaData[i].ParameterText=="Organization" )
								 {
								 Organizationdata = Organizationdata + "<option  value='" + ParaData[i].ParameterValue + "' >" + ParaData[i].ParameterValue + "</option>";
								 }
								 if(ParaData[i].ParameterText=="ResourceGBU" )
								 {
								 GBUdata = GBUdata + "<option  value='" + ParaData[i].ParameterValue + "' >" + ParaData[i].ParameterValue + "</option>";
								 }
								 if(ParaData[i].ParameterText=="ResourceLocation" )
								 {
								 Locationdata = Locationdata + "<option  value='" + ParaData[i].ParameterValue + "' >" + ParaData[i].ParameterValue + "</option>";
								 }
								
								 
							  }	
							Organizationdata="<option  value=''></option>" + Organizationdata;
							GBUdata="<option  value=''></option>" + GBUdata;
							Locationdata="<option  value=''></option>" + Locationdata;
							
							$("#ddl_Organization").text("");
							$("#ddl_Organization").append(Organizationdata);
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",});
							$("#ddl_Organization").trigger("chosen:updated");
							
							$("#ddl_GBU").text("");
							$("#ddl_GBU").append(GBUdata);
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "80px",});
							$("#ddl_GBU").trigger("chosen:updated");
							
							$("#ddl_Location").text("");
							$("#ddl_Location").append(Locationdata);
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",});
							$("#ddl_Location").trigger("chosen:updated"); 							  
							
                              },
                              error: function (err) {
								alert(err);
                              }
                          });  
	
				}
        }

}





 var ProjectFilterTable=[];

  
function filterDropdown()
{   ProjectFilterTable=[];
 var arrLocation=[];
 var arrSupervisor=[];
 var arrBUOwner=[];
 var arrGBU=[];
  var arrHireStatus=[];

if($('#drp_resources').val()!=null)
{
	var singleObj = {};	
			var listOfObjects=[];
			singleObj.FilterText = "Resourceuid";
			singleObj.FilterValue = $('#drp_resources').val().join('|');			   
			listOfObjects.push(singleObj); 
			
			var allData ="'"+ JSON.stringify(listOfObjects)+"'";
			
			$.ajax({ 
			 	       
                              url: 'https://allocationgrid.azurewebsites.net/Api/GanttUpdated_ParameterList/WithFilters',
                              type: "PUT",
                              data: allData,//JSON.stringify(allData),
							  contentType: "application/json; charset=utf-8",
							  dataType: "json",
							  success: function (data) {
								  ProjectFilterTable= JSON.parse(data)
								  
								  $.each(ProjectFilterTable.Table, function(){
									if ($.inArray(this.ResourceLocation,arrLocation) === -1) {
										arrLocation.push(this.ResourceLocation);
									}
									if ($.inArray(this.Supervisor,arrSupervisor) === -1) {
										arrSupervisor.push(this.Supervisor);
									}
									if ($.inArray(this.BUOwner,arrBUOwner) === -1) {
										arrBUOwner.push(this.BUOwner);
									}
									if ($.inArray(this.ResourceGBU,arrGBU) === -1) {
										arrGBU.push(this.ResourceGBU);
									}
									if ($.inArray(this.HireStatus,arrHireStatus) === -1) {
										arrHireStatus.push(this.HireStatus);
									}
									
									});
								arrLocation.sort();
								arrSupervisor.sort();
								arrBUOwner.sort();
								arrGBU.sort();
								arrHireStatus.sort();
								
								var Supervisordata ="";
								var Locationdata ="";
								var GBUdata =""
								var BUOwnerdata =""
								var HireStatusdata =""
								
								for (var i = 0; i < arrLocation.length; i++) {Locationdata=Locationdata + "<option  value='" + arrLocation[i] + "' >" + arrLocation[i] + "</option>";}
								for (var i = 0; i < arrSupervisor.length; i++) {Supervisordata=Supervisordata + "<option  value='" + arrSupervisor[i] + "' >" + arrSupervisor[i] + "</option>";}
								for (var i = 0; i < arrBUOwner.length; i++) {BUOwnerdata=BUOwnerdata + "<option  value='" + arrBUOwner[i] + "' >" + arrBUOwner[i] + "</option>";}
								for (var i = 0; i < arrGBU.length; i++) {GBUdata=GBUdata + "<option  value='" + arrGBU[i] + "' >" + arrGBU[i] + "</option>";}
								for (var i = 0; i < arrHireStatus.length; i++) {HireStatusdata=HireStatusdata + "<option  value='" + arrHireStatus[i] + "' >" + arrHireStatus[i] + "</option>";}
								Locationdata="<option class='clsOptiondefault' value='1'>Select Location</option>" + Locationdata
								Supervisordata="<option class='clsOptiondefault' value='1'>Select Supervisor</option>" + Supervisordata
								GBUdata="<option class='clsOptiondefault' value='1'>Select GBU</option>"+ GBUdata
								BUOwnerdata="<option class='clsOptiondefault' value='1'>Select BU Owner</option>" + BUOwnerdata
								HireStatusdata="<option class='clsOptiondefault' value='1'>Select Hire Status</option>" + HireStatusdata
								
							$("#ddl_Organization").text("");
							$("#ddl_Organization").append(Supervisordata);
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",allow_single_deselect:true });
							$("#ddl_Organization").trigger("chosen:updated");
							
							$("#ddl_GBU").text("");
							$("#ddl_GBU").append(GBUdata);
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "80px",allow_single_deselect:true });
							$("#ddl_GBU").trigger("chosen:updated");
							
							$("#ddl_Location").text("");
							$("#ddl_Location").append(Locationdata);
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",allow_single_deselect:true });
							$("#ddl_Location").trigger("chosen:updated"); 	

							$("#ddl_BUOwner").text("");
							$("#ddl_BUOwner").append(BUOwnerdata);
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",allow_single_deselect:true });
							$("#ddl_BUOwner").trigger("chosen:updated"); 	  //ddl_HireStatus
							
							$("#ddl_HireStatus").text("");
							$("#ddl_HireStatus").append(HireStatusdata);
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",allow_single_deselect:true });
							$("#ddl_HireStatus").trigger("chosen:updated"); 							
								
							  },
							  error: function (err) {}			
			
			});


}
else
{
							$("#ddl_Organization").text("");
							$("#ddl_Organization").append("<option class='clsOptiondefault' value='1'>Select Supervisor</option>");
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",});
							$("#ddl_Organization").trigger("chosen:updated");
							
							$("#ddl_GBU").text("");
							$("#ddl_GBU").append("<option class='clsOptiondefault' value='1'>Select GBU</option>");
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "80px",});
							$("#ddl_GBU").trigger("chosen:updated");
							
							$("#ddl_Location").text("");
							$("#ddl_Location").append("<option class='clsOptiondefault' value='1'>Select Location</option>");
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",});
							$("#ddl_Location").trigger("chosen:updated"); 	

							$("#ddl_BUOwner").text("");
							$("#ddl_BUOwner").append("<option class='clsOptiondefault' value='1'>Select BU Owner</option>");
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",});
							$("#ddl_BUOwner").trigger("chosen:updated"); 
							
							$("#ddl_HireStatus").text("");
							$("#ddl_HireStatus").append("<option class='clsOptiondefault' value='1'>Select Hire Status</option>");
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",});
							$("#ddl_HireStatus").trigger("chosen:updated"); 
}

	
}
var Para1val=$('#ddl_Location').val();
var Para2val=$('#ddl_Organization').val();
var Para3val=$('#ddl_BUOwner').val();
var Para4val=$('#ddl_GBU').val();
var Para5val=$('#ddl_HireStatus').val();

var SKIP_Para1val = 1
var SKIP_Para2val = 1
var SKIP_Para3val = 1
var SKIP_Para4val = 1
var SKIP_Para5val = 1

function cascadePara1()
{
 Para1val=$('#ddl_Location').val()
 Para2val=$('#ddl_Organization').val()
 Para3val=$('#ddl_BUOwner').val()
 Para4val=$('#ddl_GBU').val()
 Para5val=$('#ddl_HireStatus').val()
 
 var arrLocation=[];
 var arrSupervisor=[];
 var arrBUOwner=[];
 var arrGBU=[];
 var arrHireStatus=[];
 
  
								  $.each(ProjectFilterTable.Table, function(){
									if((this.HireStatus==Para5val || Para5val==1) && (this.ResourceLocation==Para1val || Para1val==1) && (this.Supervisor==Para2val || Para2val==1) && (this.BUOwner==Para3val || Para3val==1) && (this.ResourceGBU==Para4val || Para4val==1) ){
									if ($.inArray(this.ResourceLocation,arrLocation) === -1) {
										arrLocation.push(this.ResourceLocation);
									}
									if ($.inArray(this.Supervisor,arrSupervisor) === -1) {
										arrSupervisor.push(this.Supervisor);
									}
									if ($.inArray(this.BUOwner,arrBUOwner) === -1) {
										arrBUOwner.push(this.BUOwner);
									}
									if ($.inArray(this.ResourceGBU,arrGBU) === -1) {
										arrGBU.push(this.ResourceGBU);
									}
									if ($.inArray(this.HireStatus,arrHireStatus) === -1) {
										arrHireStatus.push(this.HireStatus);
									} 
									}
									
									});
								arrLocation.sort();
								arrSupervisor.sort();
								arrBUOwner.sort();
								arrGBU.sort();
								arrHireStatus.sort();
								
								var HireStatusdata =""
								var Supervisordata ="";
								var Locationdata ="";
								var GBUdata =""
								var BUOwnerdata =""
								
								for (var i = 0; i < arrLocation.length; i++) {Locationdata=Locationdata + "<option  value='" + arrLocation[i] + "' >" + arrLocation[i] + "</option>";}
								for (var i = 0; i < arrSupervisor.length; i++) {Supervisordata=Supervisordata + "<option  value='" + arrSupervisor[i] + "' >" + arrSupervisor[i] + "</option>";}
								for (var i = 0; i < arrBUOwner.length; i++) {BUOwnerdata=BUOwnerdata + "<option  value='" + arrBUOwner[i] + "' >" + arrBUOwner[i] + "</option>";}
								for (var i = 0; i < arrGBU.length; i++) {GBUdata=GBUdata + "<option  value='" + arrGBU[i] + "' >" + arrGBU[i] + "</option>";}
								for (var i = 0; i < arrHireStatus.length; i++) {HireStatusdata=HireStatusdata + "<option  value='" + arrHireStatus[i] + "' >" + arrHireStatus[i] + "</option>";}
								
								HireStatusdata="<option class='clsOptiondefault' value='1'>Select Hire Status</option>" + HireStatusdata
								Locationdata="<option class='clsOptiondefault' value='1'>Select Location</option>" + Locationdata
								Supervisordata="<option class='clsOptiondefault' value='1'>Select Supervisor</option>" + Supervisordata
								GBUdata="<option class='clsOptiondefault' value='1'>Select GBU</option>"+ GBUdata
								BUOwnerdata="<option class='clsOptiondefault' value='1'>Select BU Owner</option>" + BUOwnerdata
								
								
								$("#ddl_Organization").text("");
							$("#ddl_Organization").append(Supervisordata);
							$('#ddl_Organization').val(Para2val)
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",allow_single_deselect:true });
							$("#ddl_Organization").trigger("chosen:updated");
							
							$("#ddl_GBU").text("");
							$("#ddl_GBU").append(GBUdata);
							$('#ddl_GBU').val(Para4val)
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "80px",allow_single_deselect:true });
							$("#ddl_GBU").trigger("chosen:updated");
							//cc
							if(Para1val==1)
							{
						   $("#ddl_Location").text("");
							$("#ddl_Location").append(Locationdata);
							$('#ddl_Location').val(Para1val)
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",allow_single_deselect:true });
							$("#ddl_Location").trigger("chosen:updated"); 	 
							}

							$("#ddl_BUOwner").text("");
							$("#ddl_BUOwner").append(BUOwnerdata);
							$('#ddl_BUOwner').val(Para3val)
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",allow_single_deselect:true });
							$("#ddl_BUOwner").trigger("chosen:updated"); 	  //
							
							$("#ddl_HireStatus").text("");
							$("#ddl_HireStatus").append(HireStatusdata);
							$('#ddl_HireStatus').val(Para5val)
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",allow_single_deselect:true });
							$("#ddl_HireStatus").trigger("chosen:updated"); 	  //
									
																	
					
	
}
function cascadePara2(){
	
	
  Para1val=$('#ddl_Location').val()
 Para2val=$('#ddl_Organization').val()
 Para3val=$('#ddl_BUOwner').val()
 Para4val=$('#ddl_GBU').val()
 Para5val=$('#ddl_HireStatus').val()
 
 var arrLocation=[];
 var arrSupervisor=[];
 var arrBUOwner=[];
 var arrGBU=[];
 var arrHireStatus=[];
  
								  $.each(ProjectFilterTable.Table, function(){
									//if(this.Supervisor==Para2val)
									if((this.HireStatus==Para5val || Para5val==1) && (this.ResourceLocation==Para1val || Para1val==1) && (this.Supervisor==Para2val || Para2val==1) && (this.BUOwner==Para3val || Para3val==1) && (this.ResourceGBU==Para4val || Para4val==1) ){
									if ($.inArray(this.ResourceLocation,arrLocation) === -1) {
										arrLocation.push(this.ResourceLocation);
									}
									if ($.inArray(this.Supervisor,arrSupervisor) === -1) {
										arrSupervisor.push(this.Supervisor);
									}
									if ($.inArray(this.BUOwner,arrBUOwner) === -1) {
										arrBUOwner.push(this.BUOwner);
									}
									if ($.inArray(this.ResourceGBU,arrGBU) === -1) {
										arrGBU.push(this.ResourceGBU);
									}
									if ($.inArray(this.HireStatus,arrHireStatus) === -1) {
										arrHireStatus.push(this.HireStatus);
									} 
									
									}
									
									});
								arrLocation.sort();
								arrSupervisor.sort();
								arrBUOwner.sort();
								arrGBU.sort();
								arrHireStatus.sort();
								
								var HireStatusdata =""
								var Supervisordata ="";
								var Locationdata ="";
								var GBUdata =""
								var BUOwnerdata =""
								
								for (var i = 0; i < arrLocation.length; i++) {Locationdata=Locationdata + "<option  value='" + arrLocation[i] + "' >" + arrLocation[i] + "</option>";}
								for (var i = 0; i < arrSupervisor.length; i++) {Supervisordata=Supervisordata + "<option  value='" + arrSupervisor[i] + "' >" + arrSupervisor[i] + "</option>";}
								for (var i = 0; i < arrBUOwner.length; i++) {BUOwnerdata=BUOwnerdata + "<option  value='" + arrBUOwner[i] + "' >" + arrBUOwner[i] + "</option>";}
								for (var i = 0; i < arrGBU.length; i++) {GBUdata=GBUdata + "<option  value='" + arrGBU[i] + "' >" + arrGBU[i] + "</option>";}
								for (var i = 0; i < arrHireStatus.length; i++) {HireStatusdata=HireStatusdata + "<option  value='" + arrHireStatus[i] + "' >" + arrHireStatus[i] + "</option>";}
								
								HireStatusdata="<option class='clsOptiondefault' value='1'>Select Hire Status</option>" + HireStatusdata
								Locationdata="<option class='clsOptiondefault' value='1'>Select Location</option>" + Locationdata
								Supervisordata="<option class='clsOptiondefault' value='1'>Select Supervisor</option>" + Supervisordata
								GBUdata="<option class='clsOptiondefault' value='1'>Select GBU</option>"+ GBUdata
								BUOwnerdata="<option class='clsOptiondefault' value='1'>Select BU Owner</option>" + BUOwnerdata
								
								//c
								if(Para2val==1)
								{
									$("#ddl_Organization").text("");
									$("#ddl_Organization").append(Supervisordata);
									$('#ddl_Organization').val(Para2val)
									$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",allow_single_deselect:true });
									$("#ddl_Organization").trigger("chosen:updated");
								}
							$("#ddl_GBU").text("");
							$("#ddl_GBU").append(GBUdata);
							$('#ddl_GBU').val(Para4val)
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "80px",allow_single_deselect:true });
							$("#ddl_GBU").trigger("chosen:updated");
							
						    $("#ddl_Location").text("");
							$("#ddl_Location").append(Locationdata);
							$('#ddl_Location').val(Para1val)
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",allow_single_deselect:true });
							$("#ddl_Location").trigger("chosen:updated"); 	 

							$("#ddl_BUOwner").text("");
							$("#ddl_BUOwner").append(BUOwnerdata);
							$('#ddl_BUOwner').val(Para3val)
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",allow_single_deselect:true });
							$("#ddl_BUOwner").trigger("chosen:updated"); 	
								
						    
							$("#ddl_HireStatus").text("");
							$("#ddl_HireStatus").append(HireStatusdata);
							$('#ddl_HireStatus').val(Para5val)
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",allow_single_deselect:true });
							$("#ddl_HireStatus").trigger("chosen:updated"); 
						    
						    
						    	
						    
	
}
function cascadePara3(){
		
	
 Para1val=$('#ddl_Location').val()
 Para2val=$('#ddl_Organization').val()
 Para3val=$('#ddl_BUOwner').val()
 Para4val=$('#ddl_GBU').val()
 Para5val=$('#ddl_HireStatus').val()
 
 var arrLocation=[];
 var arrSupervisor=[];
 var arrBUOwner=[];
 var arrGBU=[];
 var arrHireStatus=[];
 
  
								  $.each(ProjectFilterTable.Table, function(){
									//if(this.BUOwner==Para3val)
									if((this.HireStatus==Para5val || Para5val==1) && (this.ResourceLocation==Para1val || Para1val==1) && (this.Supervisor==Para2val || Para2val==1) && (this.BUOwner==Para3val || Para3val==1) && (this.ResourceGBU==Para4val || Para4val==1) ){
									if ($.inArray(this.ResourceLocation,arrLocation) === -1) {
										arrLocation.push(this.ResourceLocation);
									}
									if ($.inArray(this.Supervisor,arrSupervisor) === -1) {
										arrSupervisor.push(this.Supervisor);
									}
									if ($.inArray(this.BUOwner,arrBUOwner) === -1) {
										arrBUOwner.push(this.BUOwner);
									}
									if ($.inArray(this.ResourceGBU,arrGBU) === -1) {
										arrGBU.push(this.ResourceGBU);
									}
									if ($.inArray(this.HireStatus,arrHireStatus) === -1) {
										arrHireStatus.push(this.HireStatus);
									} 
									}
									
									});
								arrLocation.sort();
								arrSupervisor.sort();
								arrBUOwner.sort();
								arrGBU.sort();
								arrHireStatus.sort();
								
								var HireStatusdata =""
								var Supervisordata ="";
								var Locationdata ="";
								var GBUdata =""
								var BUOwnerdata =""
								
								for (var i = 0; i < arrLocation.length; i++) {Locationdata=Locationdata + "<option  value='" + arrLocation[i] + "' >" + arrLocation[i] + "</option>";}
								for (var i = 0; i < arrSupervisor.length; i++) {Supervisordata=Supervisordata + "<option  value='" + arrSupervisor[i] + "' >" + arrSupervisor[i] + "</option>";}
								for (var i = 0; i < arrBUOwner.length; i++) {BUOwnerdata=BUOwnerdata + "<option  value='" + arrBUOwner[i] + "' >" + arrBUOwner[i] + "</option>";}
								for (var i = 0; i < arrGBU.length; i++) {GBUdata=GBUdata + "<option  value='" + arrGBU[i] + "' >" + arrGBU[i] + "</option>";}
								for (var i = 0; i < arrHireStatus.length; i++) {HireStatusdata=HireStatusdata + "<option  value='" + arrHireStatus[i] + "' >" + arrHireStatus[i] + "</option>";}
								
								HireStatusdata="<option class='clsOptiondefault' value='1'>Select Hire Status</option>" + HireStatusdata
								Locationdata="<option class='clsOptiondefault' value='1'>Select Location</option>" + Locationdata
								Supervisordata="<option class='clsOptiondefault' value='1'>Select Supervisor</option>" + Supervisordata
								GBUdata="<option class='clsOptiondefault' value='1'>Select GBU</option>"+ GBUdata
								BUOwnerdata="<option class='clsOptiondefault' value='1'>Select BU Owner</option>" + BUOwnerdata
								
								
							$("#ddl_Organization").text("");
							$("#ddl_Organization").append(Supervisordata);
							$('#ddl_Organization').val(Para2val)
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",allow_single_deselect:true });
							$("#ddl_Organization").trigger("chosen:updated");
							
							$("#ddl_GBU").text("");
							$("#ddl_GBU").append(GBUdata);
							$('#ddl_GBU').val(Para4val)
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "80px",allow_single_deselect:true });
							$("#ddl_GBU").trigger("chosen:updated");
							
						    $("#ddl_Location").text("");
							$("#ddl_Location").append(Locationdata);
							$('#ddl_Location').val(Para1val)
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",allow_single_deselect:true });
							$("#ddl_Location").trigger("chosen:updated"); 	 

							if(Para3val==1)
							{
							
							$("#ddl_BUOwner").text("");
							$("#ddl_BUOwner").append(BUOwnerdata);
							$('#ddl_BUOwner').val(Para3val)
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",allow_single_deselect:true });
							$("#ddl_BUOwner").trigger("chosen:updated"); 	
							}	
						    
						    
							$("#ddl_HireStatus").text("");
							$("#ddl_HireStatus").append(HireStatusdata);
							$('#ddl_HireStatus').val(Para5val)
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",allow_single_deselect:true });
							$("#ddl_HireStatus").trigger("chosen:updated");  
			
	
}
function cascadePara4(){
		
 Para1val=$('#ddl_Location').val()
 Para2val=$('#ddl_Organization').val()
 Para3val=$('#ddl_BUOwner').val()
 Para4val=$('#ddl_GBU').val()
 Para5val=$('#ddl_HireStatus').val()
 
 var arrLocation=[];
 var arrSupervisor=[];
 var arrBUOwner=[];
 var arrGBU=[];
 var arrHireStatus=[];
 
  
								  $.each(ProjectFilterTable.Table, function(){
									//if(this.ResourceGBU==Para4val)
									if((this.HireStatus==Para5val || Para5val==1) && (this.ResourceLocation==Para1val || Para1val==1) && (this.Supervisor==Para2val || Para2val==1) && (this.BUOwner==Para3val || Para3val==1) && (this.ResourceGBU==Para4val || Para4val==1) ){
									if ($.inArray(this.ResourceLocation,arrLocation) === -1) {
										arrLocation.push(this.ResourceLocation);
									}
									if ($.inArray(this.Supervisor,arrSupervisor) === -1) {
										arrSupervisor.push(this.Supervisor);
									}
									if ($.inArray(this.BUOwner,arrBUOwner) === -1) {
										arrBUOwner.push(this.BUOwner);
									}
									if ($.inArray(this.ResourceGBU,arrGBU) === -1) {
										arrGBU.push(this.ResourceGBU);
									}
									if ($.inArray(this.HireStatus,arrHireStatus) === -1) {
										arrHireStatus.push(this.HireStatus);
									} 
									
									}
									
									});
								arrLocation.sort();
								arrSupervisor.sort();
								arrBUOwner.sort();
								arrGBU.sort();
								arrHireStatus.sort();
								
								var HireStatusdata =""
								var Supervisordata ="";
								var Locationdata ="";
								var GBUdata =""
								var BUOwnerdata =""
								
								for (var i = 0; i < arrLocation.length; i++) {Locationdata=Locationdata + "<option  value='" + arrLocation[i] + "' >" + arrLocation[i] + "</option>";}
								for (var i = 0; i < arrSupervisor.length; i++) {Supervisordata=Supervisordata + "<option  value='" + arrSupervisor[i] + "' >" + arrSupervisor[i] + "</option>";}
								for (var i = 0; i < arrBUOwner.length; i++) {BUOwnerdata=BUOwnerdata + "<option  value='" + arrBUOwner[i] + "' >" + arrBUOwner[i] + "</option>";}
								for (var i = 0; i < arrGBU.length; i++) {GBUdata=GBUdata + "<option  value='" + arrGBU[i] + "' >" + arrGBU[i] + "</option>";}
								for (var i = 0; i < arrHireStatus.length; i++) {HireStatusdata=HireStatusdata + "<option  value='" + arrHireStatus[i] + "' >" + arrHireStatus[i] + "</option>";}
								
								HireStatusdata="<option class='clsOptiondefault' value='1'>Select Hire Status</option>" + HireStatusdata								
								Locationdata="<option class='clsOptiondefault' value='1'>Select Location</option>" + Locationdata
								Supervisordata="<option class='clsOptiondefault' value='1'>Select Supervisor</option>" + Supervisordata
								GBUdata="<option class='clsOptiondefault' value='1'>Select GBU</option>"+ GBUdata
								BUOwnerdata="<option class='clsOptiondefault' value='1'>Select BU Owner</option>" + BUOwnerdata
								
								
							$("#ddl_Organization").text("");
							$("#ddl_Organization").append(Supervisordata);
							$('#ddl_Organization').val(Para2val)
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",allow_single_deselect:true });
							$("#ddl_Organization").trigger("chosen:updated");
							
							if(Para4val==1)
							{
								$("#ddl_GBU").text("");
								$("#ddl_GBU").append(GBUdata);
								$('#ddl_GBU').val(Para4val)
								$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "80px",allow_single_deselect:true });
								$("#ddl_GBU").trigger("chosen:updated");
							}
							
						    $("#ddl_Location").text("");
							$("#ddl_Location").append(Locationdata);
							$('#ddl_Location').val(Para1val)
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",allow_single_deselect:true });
							$("#ddl_Location").trigger("chosen:updated"); 	 

							$("#ddl_BUOwner").text("");
							$("#ddl_BUOwner").append(BUOwnerdata);
							$('#ddl_BUOwner').val(Para3val)
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",allow_single_deselect:true });
							$("#ddl_BUOwner").trigger("chosen:updated"); 	
							

							$("#ddl_HireStatus").text("");
							$("#ddl_HireStatus").append(HireStatusdata);
							$('#ddl_HireStatus').val(Para5val)
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",allow_single_deselect:true });
							$("#ddl_HireStatus").trigger("chosen:updated"); 							
						    
			
	
}


function cascadePara5(){
		
 Para1val=$('#ddl_Location').val()
 Para2val=$('#ddl_Organization').val()
 Para3val=$('#ddl_BUOwner').val()
 Para4val=$('#ddl_GBU').val()
 Para5val=$('#ddl_HireStatus').val()
 
 var arrLocation=[];
 var arrSupervisor=[];
 var arrBUOwner=[];
 var arrGBU=[];
 var arrHireStatus=[];
 
  
								  $.each(ProjectFilterTable.Table, function(){
									//if(this.ResourceGBU==Para4val)
									if((this.HireStatus==Para5val || Para5val==1) && (this.ResourceLocation==Para1val || Para1val==1) && (this.Supervisor==Para2val || Para2val==1) && (this.BUOwner==Para3val || Para3val==1) && (this.ResourceGBU==Para4val || Para4val==1) ){
									if ($.inArray(this.ResourceLocation,arrLocation) === -1) {
										arrLocation.push(this.ResourceLocation);
									}
									if ($.inArray(this.Supervisor,arrSupervisor) === -1) {
										arrSupervisor.push(this.Supervisor);
									}
									if ($.inArray(this.BUOwner,arrBUOwner) === -1) {
										arrBUOwner.push(this.BUOwner);
									}
									if ($.inArray(this.ResourceGBU,arrGBU) === -1) {
										arrGBU.push(this.ResourceGBU);
									}
									if ($.inArray(this.HireStatus,arrHireStatus) === -1) {
										arrHireStatus.push(this.HireStatus);
									} 
									
									}
									
									});
								arrLocation.sort();
								arrSupervisor.sort();
								arrBUOwner.sort();
								arrGBU.sort();
								arrHireStatus.sort();
								
								var HireStatusdata =""
								var Supervisordata ="";
								var Locationdata ="";
								var GBUdata =""
								var BUOwnerdata =""
								
								for (var i = 0; i < arrLocation.length; i++) {Locationdata=Locationdata + "<option  value='" + arrLocation[i] + "' >" + arrLocation[i] + "</option>";}
								for (var i = 0; i < arrSupervisor.length; i++) {Supervisordata=Supervisordata + "<option  value='" + arrSupervisor[i] + "' >" + arrSupervisor[i] + "</option>";}
								for (var i = 0; i < arrBUOwner.length; i++) {BUOwnerdata=BUOwnerdata + "<option  value='" + arrBUOwner[i] + "' >" + arrBUOwner[i] + "</option>";}
								for (var i = 0; i < arrGBU.length; i++) {GBUdata=GBUdata + "<option  value='" + arrGBU[i] + "' >" + arrGBU[i] + "</option>";}
								for (var i = 0; i < arrHireStatus.length; i++) {HireStatusdata=HireStatusdata + "<option  value='" + arrHireStatus[i] + "' >" + arrHireStatus[i] + "</option>";}
								
								HireStatusdata="<option class='clsOptiondefault' value='1'>Select Hire Status</option>" + HireStatusdata								
								Locationdata="<option class='clsOptiondefault' value='1'>Select Location</option>" + Locationdata
								Supervisordata="<option class='clsOptiondefault' value='1'>Select Supervisor</option>" + Supervisordata
								GBUdata="<option class='clsOptiondefault' value='1'>Select GBU</option>"+ GBUdata
								BUOwnerdata="<option class='clsOptiondefault' value='1'>Select BU Owner</option>" + BUOwnerdata
								
								
							$("#ddl_Organization").text("");
							$("#ddl_Organization").append(Supervisordata);
							$('#ddl_Organization').val(Para2val)
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",allow_single_deselect:true });
							$("#ddl_Organization").trigger("chosen:updated");
						
							
							$("#ddl_GBU").text("");
							$("#ddl_GBU").append(GBUdata);
							$('#ddl_GBU').val(Para4val)
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "80px",allow_single_deselect:true });
							$("#ddl_GBU").trigger("chosen:updated");
							
							
						    $("#ddl_Location").text("");
							$("#ddl_Location").append(Locationdata);
							$('#ddl_Location').val(Para1val)
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",allow_single_deselect:true });
							$("#ddl_Location").trigger("chosen:updated"); 	 

							$("#ddl_BUOwner").text("");
							$("#ddl_BUOwner").append(BUOwnerdata);
							$('#ddl_BUOwner').val(Para3val)
							$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",allow_single_deselect:true });
							$("#ddl_BUOwner").trigger("chosen:updated"); 	
							
							if(Para5val==1)
							{
								$("#ddl_HireStatus").text("");
								$("#ddl_HireStatus").append(HireStatusdata);
								$('#ddl_HireStatus').val(Para5val)
								$(".ddlFilters").chosen({no_results_text: "Oops, nothing found!",width: "200px",allow_single_deselect:true });
								$("#ddl_HireStatus").trigger("chosen:updated"); 				
							}							
						    
			
	
}

	function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}
	//$(document).ready(function () {
	var newstart
	var newend
	function getGridDataClick()
	{
	
			 GridGantt=[];
	 GridGanttIndex=0;
	 GridTPhase=[];
	 GridTPhaseIndex=0;
	 GridGrid=[];
	 GridGridIndex=0;
	 Gridtable="";
	 OutputResponseTable="";
	 OutputResponseTable1="";
	 OutputResponseTable_Group="";
	 arr_GroupName=[]
	 arr_GroupName_Count=[]
	 
	// var radBtn = $("input[name='GroupingData']:checked").val() 
			var DropCheck  = $('#drp_resources').val()
			$('#message').text('')
			var Sdate = $("#start").val()
			var EDate = $("#end").val()
			//if(Sdate == null || Sdate == '' || EDate == null || EDate == '' || DropCheck == null || radBtn == undefined){
				if(Sdate == null || Sdate == '' || EDate == null || EDate == '' || DropCheck == null ){
				$('#message').text('Please populate all required fields indicated with an *')
				
				return;				
			}
	
			deletEngagenetarray.push('0D8659FD-C069-EA11-B089-00155DA49E01')
			deletEngagenetarray.push('1A0FDDC5-151D-EA11-9D21-001C42D6E023')
			deletEngagenetarray.push('2B82A118-31D6-E911-B080-00155DC46F22')
			var singleObj = {};	
			var listOfObjects=[];
			singleObj.Resourceuid = $('#drp_resources').val().join('|');			   
			listOfObjects.push(singleObj); 
			var allData ="'"+ JSON.stringify(listOfObjects)+"'";
			
			
			var selectedvals=$('#drp_resources').val();
			for(j=0;j<selectedvals.length;j++)
			{
				//var idxs=arr_ProjectNo.indexOf(parseInt(selectedvals[j]));
				var idxs=arr_ProjectNo.indexOf((selectedvals[j]));
				if(j==0)
				{
				 newstart=arr_ProjectStart[idxs]
				 newend=arr_ProjectFinish[idxs]
				}
				else
				{
					if(new Date(newstart)>new Date(arr_ProjectStart[idxs])){newstart=arr_ProjectStart[idxs]}
					if(new Date(newend)<new Date(arr_ProjectFinish[idxs])){newend=arr_ProjectFinish[idxs]}
					
				}
				 

				}
								
								
			  
			
/* 			var YearS= $("#start").val().split(' ')[1];
  		    var MonthS= monthNamesFull.indexOf($("#start").val().split(' ')[0]); 
  
			var YearF= $("#end").val().split(' ')[1];
			var MonthF= monthNamesFull.indexOf($("#end").val().split(' ')[0]); */
			
			var YearS= newstart.split('-')[0];
  		    var MonthS= newstart.split('-')[1];
			
			var YearF= newend.split('-')[0];
			var MonthF= newend.split('-')[1];
			
			var val1 =new Date(YearS,MonthS,5);
			val1.setMonth(new Date(val1).getMonth()-1)
			
			var val2 =new Date(YearF,MonthF,5);
			
		 	if(monthDiff(new Date(newstart),new Date(newend)) != 24)
			{
				var Tempdate=new Date(val1)
				val2=new Date(Tempdate.setFullYear(Tempdate.getFullYear() + 2))
			} 
			
			var startDate = val1.getMonth() +1+ ' ' + val1.getFullYear();
			var EndDate = val2.getMonth() + 1 + ' ' + val2.getFullYear();
			
			
			var RoleUrl='https://allocationgrid.azurewebsites.net/Api/GanttUpdated_Role/9FA7C3AC-3564-4836-9A50-8951792AF1B4/'+startDate+'/'+EndDate;
			var ResourceUrl='https://allocationgrid.azurewebsites.net/Api/GanttUpdated_Project/9FA7C3AC-3564-4836-9A50-8951792AF1B4/'+startDate+'/'+EndDate;
			var ProjectOnlyUrl='https://allocationgrid.azurewebsites.net/Api/GanttUpdated_ProjectOnly/9FA7C3AC-3564-4836-9A50-8951792AF1B4/'+startDate+'/'+EndDate;
			var callURL=ResourceUrl;
			callURL=RoleUrl;
			/* if($("input[name='GroupingData']:checked").val()=="ResourceType")
			{
				callURL=RoleUrl;				
			} */
			
			$.LoadingOverlay("show");
		    $.ajax({        	       
                              url: callURL,
                              type: "PUT",
                              data: allData,//JSON.stringify(allData),
							  contentType: "application/json; charset=utf-8",
							  dataType: "json",
                              success: function (data) {
                               debugger;	
							   $('#gantt').html("");
							   $('#ganttGrid').html("");
							   
							    OutputResponseTable
								OutputResponseTable1
							   var ResponseTable= JSON.parse(data)
							  //var GanttData = data
							
								var selProjName2 = [];
								var TTitle = [];								
								OutputResponseTable =ResponseTable.Table
								OutputResponseTable.forEach(function(item1){ 
										TTitle.push(item1.Title);
								})
								var dsc = ResponseTable.Table1
								if(chktrue){
									dsc.forEach(function(item2,idx){ 
											if(item2.Projectuid == -1){
												 selProjName2.push(item2) 
											}
											else if(TTitle.indexOf(item2.Projectname) != -1)
											  {
												   selProjName2.push(item2) 
											  }
									 })
									 OutputResponseTable1=selProjName2
								}else{								
									OutputResponseTable1=ResponseTable.Table1
								}
							  
							  chktrue = false
							  
							  OutputResponseTable_Group=ResponseTable.Table2
							  
							  var keys = Object.keys(OutputResponseTable1[0]);
							 var Start1= new Date(keys[keys.length-1]);
							 GanttFinish = new Date(Start1.setMonth(Start1.getMonth()+1));
							 GanttStart= new Date(keys[3]);
							 
							 //var Sel_Start=$('#start').val().split(' ')
							 var Sel_Start=$('#start').val().split(' ')
							 var sel_Start_Mon=monthNamesFull.indexOf(Sel_Start[0])
							 //GanttStart = new Date(Sel_Start[1],sel_Start_Mon,5)
							 //NewGanttStart = new Date(Sel_Start[1],sel_Start_Mon,15)
							  GanttStart = new Date(YearS,MonthS,5)
							  GanttStart.setMonth(new Date(GanttStart).getMonth()-1)
							 NewGanttStart = new Date(YearS,MonthS,15)
							 NewGanttStart.setMonth(new Date(NewGanttStart).getMonth()-1)
							 
							 //var Sel_end=$('#end').val().split(' ')
							 var Sel_end=$('#end').val().split(' ')
							 var sel_end_Mon=monthNamesFull.indexOf(Sel_end[0])
							 //GanttFinish = new Date(Sel_end[1],sel_end_Mon,5);
							 //NewGanttFinish = new Date(Sel_end[1],sel_end_Mon,55)
							 GanttFinish = new Date(YearF,MonthF,5);
							 NewGanttFinish = new Date(YearF,MonthF,55)
							 
							 if(monthDiff(new Date(newstart),new Date(newend)) != 24)
								{
									var Tempdate=new Date(YearS,MonthS,5)
									GanttFinish=new Date(Tempdate.setFullYear(Tempdate.getFullYear() + 2))
									
									Tempdate=new Date(YearS,MonthS,15)
									NewGanttFinish=new Date(Tempdate.setFullYear(Tempdate.getFullYear() + 2))
								} 
							 
							 
							 //GanttFinish=new Date(GanttStart.setFullYear(GanttStart.getFullYear() + 2))
							 //NewGanttFinish=new Date(NewGanttStart.setFullYear(NewGanttStart.getFullYear() + 2))
							 
							  var Ldata =[];
							  var Ddata =[];
							  
							  var GanttData = ResponseTable.Table;
							  
							  
							  for (var i = 0; i < GanttData.length; i++) 
							  {
								  GanttData[i].ID =  parseInt(GanttData[i].ID)
								GanttData[i].orderId =  parseInt(GanttData[i].orderId)
								
								  
								if(GanttData[i].ParentID==null)
								{
									//if(GanttData[i].Title.startsWith('_'))
									{
										GanttData[i].percentComplete=0.0
										GridGantt[GridGanttIndex]=GanttData[i]
									GridGanttIndex++;
									}
									
								}
								else									
								{
									GanttData[i].ParentID = parseInt(GanttData[i].ParentID)
									var Lobj = {}
									Lobj.ID= GanttData[i].ID;
									Lobj.ResourceID= null
									Lobj.TaskID= GanttData[i].ID
									Lobj.Units = GanttData[i].TotalUnit
									Ldata.push(Lobj);
									
									var sinobj = {}
									sinobj.ID= GanttData[i].ID;
									sinobj.PredecessorID= GanttData[i].ParentID
									sinobj.SuccessorID= GanttData[i].ID
									sinobj.Type = 0
									Ddata.push(sinobj); 
									
									GridTPhase[GridTPhaseIndex]==GanttData[i]
									GridTPhaseIndex++;
								}
																
								
							  }
							
								for(j=0;j<OutputResponseTable_Group.length;j++)
								{
									arr_GroupName.push(OutputResponseTable_Group[j].PrimaryJobRole)
									arr_GroupName_Count.push(OutputResponseTable_Group[j].ResourceCount)
								}									
								

							  
							  $.LoadingOverlay("hide");
							  
							  GenerateGridGrid(ResponseTable.Table1)
							  GenerateGanttChart(GridGantt,Ldata,Ddata)
							  // cleanandupdateGridCells()
                              },
                              error: function (err) {
								  $.LoadingOverlay("hide");
								alert(err);
                              }
                          });         	
	};

function getGridDataClickWithFilters()
	{
	
			 GridGantt=[];
	 GridGanttIndex=0;
	 GridTPhase=[];
	 GridTPhaseIndex=0;
	 GridGrid=[];
	 GridGridIndex=0;
	 Gridtable="";
	 OutputResponseTable="";
	 OutputResponseTable1="";
	 OutputResponseTable_Group="";
	 arr_GroupName=[]
	 arr_GroupName_Count=[]
	 
	 ChangedProject = "";
ChangedProjectStart= "";
ChangedProjectStartNew= "";
ChangedProjectEnd= "";
 ChangedProjectEndNew= "";
	 
	// var radBtn = $("input[name='GroupingData']:checked").val() 
			var DropCheck  = $('#drp_resources').val()
			$('#message').text('')
			var Sdate = $("#start").val()
			var EDate = $("#end").val()
			//if(Sdate == null || Sdate == '' || EDate == null || EDate == '' || DropCheck == null || radBtn == undefined){
				if(Sdate == null || Sdate == '' || EDate == null || EDate == '' || DropCheck == null ){
				$('#message').text('Please populate all required fields indicated with an *')
				
				return;				
			}
	
			deletEngagenetarray.push('0D8659FD-C069-EA11-B089-00155DA49E01')
			deletEngagenetarray.push('1A0FDDC5-151D-EA11-9D21-001C42D6E023')
			deletEngagenetarray.push('2B82A118-31D6-E911-B080-00155DC46F22')
			var singleObj = {};	
			var listOfObjects=[];
			singleObj.FilterText = "Resourceuid";
			singleObj.FilterValue = $('#drp_resources').val().join('|');			   
			listOfObjects.push(singleObj); 
			
			var FilterOrganization= {};	
			FilterOrganization.FilterText = "Organization";
			if($('#ddl_Organization').val()==null || $('#ddl_Organization').val()=='')
			{
				FilterOrganization.FilterValue = "1"
			}
			else
			{
				FilterOrganization.FilterValue = $('#ddl_Organization').val().toString();
			}
			
			listOfObjects.push(FilterOrganization); 
			
			var FilterGBU= {};	
			FilterGBU.FilterText = "GBU";
			if($('#ddl_GBU').val()==null || $('#ddl_GBU').val()=='')
			{
				FilterGBU.FilterValue = "1"
			}
			else
			{
				FilterGBU.FilterValue = $('#ddl_GBU').val().toString();
			}
			
			listOfObjects.push(FilterGBU); 
			
			var FilterLocation= {};	
			FilterLocation.FilterText = "Location";
			if($('#ddl_Location').val()==null || $('#ddl_Location').val()=='')
			{
				FilterLocation.FilterValue = "1"
			}
			else
			{
				FilterLocation.FilterValue = $('#ddl_Location').val().toString();
			}  // ddl_HireStatus
			
			
			
			listOfObjects.push(FilterLocation); 
			
			var FilterBUOwner= {};	
			FilterBUOwner.FilterText = "BUOwner";
			if($('#ddl_BUOwner').val()==null || $('#ddl_BUOwner').val()=='')
			{
				FilterBUOwner.FilterValue = "1"
			}
			else
			{
				FilterBUOwner.FilterValue = $('#ddl_BUOwner').val().toString();
			}
			
			listOfObjects.push(FilterBUOwner); 
			
			var FilterHireStatus= {};	
			FilterHireStatus.FilterText = "HireStatus";
			if($('#ddl_HireStatus').val()==null || $('#ddl_HireStatus').val()=='')
			{
				FilterHireStatus.FilterValue = "1"
			}
			else
			{
				FilterHireStatus.FilterValue = $('#ddl_HireStatus').val().toString();
			}
			
			listOfObjects.push(FilterHireStatus); 
			
			
			
			var allData ="'"+ JSON.stringify(listOfObjects)+"'";
			
			
			var selectedvals=$('#drp_resources').val();
			for(j=0;j<selectedvals.length;j++)
			{
				//var idxs=arr_ProjectNo.indexOf(parseInt(selectedvals[j]));
				var idxs=arr_ProjectNo.indexOf((selectedvals[j]));
				if(j==0)
				{
				 newstart=arr_ProjectStart[idxs]
				 newend=arr_ProjectFinish[idxs]
				}
				else
				{
					if(new Date(newstart)>new Date(arr_ProjectStart[idxs])){newstart=arr_ProjectStart[idxs]}
					if(new Date(newend)<new Date(arr_ProjectFinish[idxs])){newend=arr_ProjectFinish[idxs]}
					
				}
				 

				}
								
							
				newstart=new Date(new Date(newstart).setMonth(new Date(newstart).getMonth() -3))
				newend=new Date(new Date(newend).setMonth(new Date(newend).getMonth() +24))
			
/* 			var YearS= $("#start").val().split(' ')[1];
  		    var MonthS= monthNamesFull.indexOf($("#start").val().split(' ')[0]); 
  
			var YearF= $("#end").val().split(' ')[1];
			var MonthF= monthNamesFull.indexOf($("#end").val().split(' ')[0]); 
			
			var YearS= newstart.split('-')[0];
  		    var MonthS= newstart.split('-')[1];
			
			var YearF= newend.split('-')[0];
			var MonthF= newend.split('-')[1];  */
			
			var YearS= newstart.getFullYear();
  		    var MonthS= newstart.getMonth();
			
			var YearF= newend.getFullYear();
			var MonthF= newend.getMonth();
			
			
			var val1 =new Date(YearS,MonthS,5);
			val1.setMonth(new Date(val1).getMonth()-1)
			
			var val2 =new Date(YearF,MonthF,5);
			
		 	/* if(monthDiff(new Date(newstart),new Date(newend)) != 24)
			{
				var Tempdate=new Date(val1)
				val2=new Date(Tempdate.setFullYear(Tempdate.getFullYear() + 2))
			} 
			 */
			var startDate = val1.getMonth() +1+ ' ' + val1.getFullYear();
			var EndDate = val2.getMonth() + 1 + ' ' + val2.getFullYear();
			
			
			var RoleUrl='https://allocationgrid.azurewebsites.net/Api/GanttUpdated_Role_Filters/9FA7C3AC-3564-4836-9A50-8951792AF1B4/'+startDate+'/'+EndDate;
			var ResourceUrl='https://allocationgrid.azurewebsites.net/Api/GanttUpdated_Project/9FA7C3AC-3564-4836-9A50-8951792AF1B4/'+startDate+'/'+EndDate;
			var ProjectOnlyUrl='https://allocationgrid.azurewebsites.net/Api/GanttUpdated_ProjectOnly/9FA7C3AC-3564-4836-9A50-8951792AF1B4/'+startDate+'/'+EndDate;
			var callURL=ResourceUrl;
			callURL=RoleUrl;
			/* if($("input[name='GroupingData']:checked").val()=="ResourceType")
			{
				callURL=RoleUrl;				
			} */
			
			$.LoadingOverlay("show");
		    $.ajax({        	       
                              url: callURL,
                              type: "PUT",
                              data: allData,//JSON.stringify(allData),
							  contentType: "application/json; charset=utf-8",
							  dataType: "json",
                              success: function (data) {
                               debugger;	
							   $('#gantt').html("");
							   $('#ganttGrid').html("");
							   
							    OutputResponseTable
								OutputResponseTable1
							   var ResponseTable= JSON.parse(data)
							   // var ResponseTable= (data)
							  //var GanttData = data
							
								var selProjName2 = [];
								var TTitle = [];								
								OutputResponseTable =ResponseTable.Table
								OutputResponseTable.forEach(function(item1){ 
										TTitle.push(item1.Title);
								})
								var dsc = ResponseTable.Table1
								if(chktrue){
									dsc.forEach(function(item2,idx){ 
											if(item2.Projectuid == -1){
												 selProjName2.push(item2) 
											}
											else if(TTitle.indexOf(item2.Projectname) != -1)
											  {
												   selProjName2.push(item2) 
											  }
									 })
									 OutputResponseTable1=selProjName2
								}else{								
									OutputResponseTable1=ResponseTable.Table1
								}
							  
							  chktrue = false
							  
							  OutputResponseTable_Group=ResponseTable.Table2
							  //working
							  var keys = Object.keys(OutputResponseTable1[0]);
							 var Start1= new Date(keys[keys.length-1]);
							 GanttFinish = new Date(Start1.setMonth(Start1.getMonth()+1));
							 GanttStart= new Date(keys[3]);
							 
							 //var Sel_Start=$('#start').val().split(' ')
							 var Sel_Start=$('#start').val().split(' ')
							 var sel_Start_Mon=monthNamesFull.indexOf(Sel_Start[0])
							 //GanttStart = new Date(Sel_Start[1],sel_Start_Mon,5)
							 //NewGanttStart = new Date(Sel_Start[1],sel_Start_Mon,15)
							  GanttStart = new Date(YearS,MonthS,5)
							  GanttStart.setMonth(new Date(GanttStart).getMonth()-1)
							 NewGanttStart = new Date(YearS,MonthS,15)
							 NewGanttStart.setMonth(new Date(NewGanttStart).getMonth()-1)
							 
							 //var Sel_end=$('#end').val().split(' ')
							 var Sel_end=$('#end').val().split(' ')
							 var sel_end_Mon=monthNamesFull.indexOf(Sel_end[0])
							 //GanttFinish = new Date(Sel_end[1],sel_end_Mon,5);
							 //NewGanttFinish = new Date(Sel_end[1],sel_end_Mon,55)
							 GanttFinish = new Date(YearF,MonthF,5);
							 NewGanttFinish = new Date(YearF,MonthF,55)
							 
							/*  if(monthDiff(new Date(newstart),new Date(newend)) != 24)
								{
									var Tempdate=new Date(YearS,MonthS,5)
									GanttFinish=new Date(Tempdate.setFullYear(Tempdate.getFullYear() + 2))
									
									Tempdate=new Date(YearS,MonthS,15)
									NewGanttFinish=new Date(Tempdate.setFullYear(Tempdate.getFullYear() + 2))
								} 
							  */
							 
							 //GanttFinish=new Date(GanttStart.setFullYear(GanttStart.getFullYear() + 2))
							 //NewGanttFinish=new Date(NewGanttStart.setFullYear(NewGanttStart.getFullYear() + 2))
							 
							  var Ldata =[];
							  var Ddata =[];
							  
							  var GanttData = ResponseTable.Table;
							  
							  
							  for (var i = 0; i < GanttData.length; i++) 
							  {
								  GanttData[i].ID =  parseInt(GanttData[i].ID)
								GanttData[i].orderId =  parseInt(GanttData[i].orderId)
								
								  
								if(GanttData[i].ParentID==null)
								{
									//if(GanttData[i].Title.startsWith('_'))
									{
										GanttData[i].percentComplete=0.0
										GridGantt[GridGanttIndex]=GanttData[i]
									GridGanttIndex++;
									}
									
								}
								else									
								{
									GanttData[i].ParentID = parseInt(GanttData[i].ParentID)
									var Lobj = {}
									Lobj.ID= GanttData[i].ID;
									Lobj.ResourceID= null
									Lobj.TaskID= GanttData[i].ID
									Lobj.Units = GanttData[i].TotalUnit
									Ldata.push(Lobj);
									
									var sinobj = {}
									sinobj.ID= GanttData[i].ID;
									sinobj.PredecessorID= GanttData[i].ParentID
									sinobj.SuccessorID= GanttData[i].ID
									sinobj.Type = 0
									Ddata.push(sinobj); 
									
									GridTPhase[GridTPhaseIndex]==GanttData[i]
									GridTPhaseIndex++;
								}
																
								
							  }
							
								for(j=0;j<OutputResponseTable_Group.length;j++)
								{
									arr_GroupName.push(OutputResponseTable_Group[j].PrimaryJobRole)
									arr_GroupName_Count.push(OutputResponseTable_Group[j].ResourceCount)
								}									
								

							  
							  $.LoadingOverlay("hide");
							  
							  GenerateGridGrid(ResponseTable.Table1)
							  GenerateGanttChart(GridGantt,Ldata,Ddata)
							  // cleanandupdateGridCells()
                              },
                              error: function (err) {
								  $.LoadingOverlay("hide");
								alert(err);
                              }
                          });         	
	};

function setFilterReset()
{
	filterDropdown();
/* 	 $('#ddl_Organization').val("").trigger("chosen:updated");
	 $('#ddl_GBU').val("").trigger("chosen:updated");
	 $('#ddl_Location').val("").trigger("chosen:updated"); 
	 $('#ddl_BUOwner').val("").trigger("chosen:updated"); */
}

//});

	function cleanandupdateGridCellsV2()
		{
				var RData=OutputResponseTable1
				var newStart= new Date(ChangedProjectStartNew)
				var oldStart= new Date(ChangedProjectStart)
				var newEnd= new Date(ChangedProjectEndNew)
				var oldEnd= new Date(ChangedProjectEnd)
				
				//-------
				var monthval=newStart.getUTCMonth()+1
				var strNewStart= newStart.getFullYear()+'-'+ (monthval.toString().length==2?monthval.toString():'0'+monthval.toString())+'-05'
				 monthval=oldStart.getUTCMonth()+1
				var stroldStart= oldStart.getFullYear()+'-'+ (monthval.toString().length==2?monthval.toString():'0'+monthval.toString())+'-05'
				
				 monthval=newEnd.getUTCMonth()+1
				var strnewEnd= newEnd.getFullYear()+'-'+ (monthval.toString().length==2?monthval.toString():'0'+monthval.toString()) +'-05'
				 monthval=oldEnd.getUTCMonth()+1
				var stroldEnd= oldEnd.getFullYear()+'-'+ (monthval.toString().length==2?monthval.toString():'0'+monthval.toString())+'-05'
				
				//------
				
				var keys = Object.keys(RData[0]);
				//-------
				var newStartIndex=keys.indexOf(strNewStart);
				var stroldStartIndex=keys.indexOf(stroldStart);
				var strnewEndIndex=keys.indexOf(strnewEnd);
				var stroldEndIndex=keys.indexOf(stroldEnd);
				
				//-------
				
				
				
				var Direction="Left";
				var diff=monthDiff(newStart,oldStart)
				if(newStart>oldStart)
				{
					Direction="Right"					
				}
				
				
				
				for(i=0;i<OutputResponseTable1.length;i++)
				{
					
					if(OutputResponseTable1[i].Projectname==ChangedProject)
					{
						var tempidvalx=0
						var temp=[];
						for(j=stroldStartIndex;j<stroldEndIndex;j++)
						{													
							OutputResponseTable1[i]
							temp.push(OutputResponseTable1[i][keys[j]])
						}
						
						for(j=3;j<keys.length;j++)
						{			
							OutputResponseTable1[i][keys[j]]=0;
						}
						var temploop=0;
						for(j=newStartIndex;j<strnewEndIndex;j++)
						{													
							OutputResponseTable1[i]
							OutputResponseTable1[i][keys[j]]=temp[temploop];
							temploop++;
						}
						
						
					}
				}
			//GenerateGridGrid(OutputResponseTable1);
			//currentselectedproj = OutputResponseTable1;
			cleanandupdateGridCellsV3(OutputResponseTable1);
			
		}

	function monthDiff(dateFrom, dateTo) {
	return dateTo.getMonth() - dateFrom.getMonth() + 
   (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
	}
	
	var Clean2GridData=[]
	//var currentselectedproj = '';;
	function cleanandupdateGridCellsV3(updatesum)
	{
		Clean2GridData=[]
		var RData=updatesum
		var keys = Object.keys(RData[0]);
		var Single_Resource=[];
		for(i=0;i<RData.length;i++)
		{	Single_Resource.push(RData[i]["Projectname"])
			if(RData[i]["resourceName"]!=RData[i]["Projectname"])
			{
				if(RData[i]["Projectname"]=="Biothermal Ear Warming System")
				{
				 console.log("DD");
				}
				var idx=Single_Resource.indexOf(RData[i]["resourceName"])
				for(j=3;j<keys.length; j++)
					{	

					try{
					var cval1 =RData[idx][keys[j]];
					var cval2=RData[i][keys[j]]
					cval1=(cval1==null?0:parseFloat(cval1))
					cval2=(cval2==null?0:parseFloat(cval2))
				
					RData[idx][keys[j]]=parseFloat(cval1) + parseFloat(cval2)	
					}
					catch(err){ console.log(err)}

										
				 
					}
			}
			else
			{
				for(j=3;j<keys.length; j++)
					{	
					RData[i][keys[j]]=0					
				 
					}
				
			}
		}
		GenerateGridGrid(RData);
	}
	
	
	
	
	function cleanandupdateGridCells()
	{
		Clean2GridData=[]
		var RData=OutputResponseTable1
		var keys = Object.keys(RData[0]);
		var Single_Resource=[];
		for(i=0;i<RData.length;i++)
		{   if(Single_Resource.indexOf(RData[i]["resourceName"])== -1)
			{Single_Resource.push(RData[i]["resourceName"])
			  var Temp=[]; 
			  for(j=0;j<keys.length; j++)
				{
					Temp[j]=RData[i][keys[j]]
				 
				}
			 Clean2GridData.push(Temp);
			}
			else
			{
				var idx=Single_Resource.indexOf(RData[i]["resourceName"])
				 for(j=3;j<keys.length; j++)
					{			 

				var cval1 =Clean2GridData[idx][j];
				var cval2=RData[i][keys[j]]
				cval1=(cval1==null?0:parseFloat(cval1))
				cval2=(cval2==null?0:parseFloat(cval2))
				
					Clean2GridData[idx][j]=parseFloat(cval1) + parseFloat(cval2)						
				 
				}
			}
			
		}
	GenerateGridGrid(Clean2GridData,keys);
	}
	
	function GenerateGridGrid(JData)
	{	GanttGridView_lbl=[];
		//alert(JData)
		//var GridData = JSON.parse(JData);
		var GridData = JData;
		$('#ganttGrid').html("");
		var array_resource=[]
		var updatefncall = function (obj, cel, val) {  }
		
		var keys = Object.keys(GridData[0]);
         					 for (var i = 0; i < keys.length; i++) {
								 if(keys[i]=="Projectuid" || keys[i]=="Projectname" || keys[i]=="resourceName" || keys[i]=="StackRank" || keys[i]=="NewRank")
								 { 
									if(keys[i]=="Projectuid")
									 {
									array_resource.push({
         							 type: 'text',
         							 //columnDrag: true,
         							 title: keys[i],
         							 width: 305,
									 readOnly: true ,
         
         
         						 });
									 }
									 else
									 {array_resource.push({
         							 type: 'text',
         							 //columnDrag: true,
         							 title: keys[i],
         							 width: 77,
         
         
         						 });
									 }
									
								 }
								 else
								 {
									 
									
										 var dateNew= new Date(keys[i])
									  array_resource.push({
         							 type: 'numeric',
         							 //columnDrag: true,
         							 title: dateNew.getFullYear() +" " + monthNames[dateNew.getMonth()],
         							 width: 75,
									// mask:'#,##.00 %', decimal:'.'
         
         
         						 });
									 
									 
								 }
         						
         						// headers.push(keys[i]);
         					 }
							 // Adding additional 2 Years
							 // var keys = Object.keys(GridData[0]);
							 
							 var Start1= new Date(keys[keys.length-1]);
							 var newEnd1 = new Date(Start1);
							 for(var i=1;i<=12;i++)
							 {		newEnd1 = new Date(Start1.setMonth(Start1.getMonth()+1));
									var dateNew= new Date(newEnd1)
									  array_resource.push({
         							 type: 'numeric',
         							 //columnDrag: true,
         							 title: dateNew.getFullYear() +" " + monthNames[dateNew.getMonth()],
         							 width: 75,
									 mask:'#,##.00 %', decimal:'.'
         
         
         						 });
								Start1= newEnd1;
							 }
							 $('#ganttGrid').html('')
							 if(GridData[0].Projectuid== null)
							 {
								 GridData.splice(0,1)
							 }
							 Gridtable = jexcel(document.getElementById('ganttGrid'), {
                              data: GridData,
                              columns: array_resource,
         		 columnDrag:true,
				 columnSorting:true,
			//	 onchange:updatefncall,
         	//	  updateTable:function(instance, cell, col, row, val, label, cellName) {
			//		  console.log("updateTable");},
                         });
						 Gridtable.hideIndex(0);
						 //$('#ganttGrid').find('table').find('tr').eq(0).find('td').eq(5).html('<span class="pointer" style="float: center;" onclick="fnsortGridData()" title="Sort">Rank<span class="k-icon k-i-sort-desc"></span></span>')
						// Gridtable.orderBy(2,1);
						 var headerhide=0;
						  $('#ganttGrid').find('table').find('tr').each(function(){ 
						 
						   $(this).find('td').eq(1).hide();
						   $(this).find('td').eq(3).hide();
						   if(headerhide!=0)
						   {
							   if($(this).find('td').eq(2).text()!=$(this).find('td').eq(3).text())
								{
									$(this).hide();
									$(this).attr('data-res',$(this).find('td').eq(3).text());
									$(this).find('td').eq(2).css('text-align','left');
									$(this).find('td').eq(2).css('padding-left','30px')
								}
								else
								{
									GanttGridView_lbl.push($(this).find('td').eq(2).text())
									$(this).find('td').eq(2).css('text-align','left');
									$(this).find('td').eq(2).html('<a class="showhiderowres" onclick="return ACCbtnClick(this)"><span class="k-icon k-i-arrow-60-right"></span>'+$(this).find('td').eq(2).text()+'</a>')								
									$(this).attr('data-rollup',$(this).find('td').eq(3).text());
									$(this).addClass("rollupheader");
								}
									$(this).find('td:gt(4)').attr("data-Rank","NoRank")
									$(this).find('td').eq(4).attr("data-Rank","NoRank")
									$(this).find('td').eq(5).attr("data-Rank","NoRank")
								
						   }
						   headerhide=1;
						   
						   
						  
						  });
						  var  projList=[];
			$('#drp_resources').find('option:selected').each(function(){
				console.log($(this).text())
				projList.push($(this).text())
			});
						  
						 $('#ganttGrid').find('table').find('tbody').find('td').each(function(){ 
							var cellval=$(this).text()
							cellval=cellval.replace(' %','');
							var PName=$(this).closest('tr').find('td').eq(2).text()
							var RName=$(this).closest('tr').find('td').eq(3).text()
							var countUsers=1;
							
							
							if(PName==RName)
							{
								if($(this).closest('tr').find('td').eq(1).text().length<20)
								{
									try
									{
								countUsers=parseInt($(this).closest('tr').find('td').eq(1).text())
								if(countUsers==-1)
								{
									countUsers=1
								}
									}
									catch(err)
									{
										countUsers=1;
									}
								
								}
								if(PName=='Large Molecule Analytical')
								{
									var tt=0;
								}
								
								// 85-95 yellow 95-105 green 115+ red   hover color 85-
								if($.isNumeric(cellval))
								{
								if($(this).attr('data-Rank')=="NoRank")
								{
								var cellvalc=parseFloat(cellval)
								$(this).text(cellvalc.toFixed(2)) 
								if(cellvalc==16600)
								{
									var uu=0;
								}
								if(cellvalc>=(1*countUsers))   // +115
								{
									$(this).css("background-color","#ff6e69");   // red
									$(this).css("color","white");
								}
								if(cellvalc<(1*countUsers) && cellvalc >=(.85*countUsers))  //105-115 or 85-95
								{
									/* $(this).css("background-color","#88d8b0"); // green
									$(this).css("color","black"); */
									
									$(this).css("background-color","#ffcb5c");  //yellow
									$(this).css("color","black");
								}
								if(cellvalc<(.85*countUsers))     // 95-105 
								{
									
								//	$(this).css("background-color","#ffcb5c");  //yellow
									//$(this).css("color","black");
								}
								}
								}
								
							}
							else
							{
								if(projList.indexOf(PName)==-1)
								{
								$(this).addClass('readonly'); 
								$(this).css("background-color","#F2F2F2"); 
								$(this).css("color","black");	
								$(this).attr('Title','Project')

								//.css("background-color","light");
								}
								else{
									$(this).addClass('readonly'); 
								$(this).css("background-color","white"); 
								$(this).css("color","black");	
								$(this).attr('Title','Idea')
								}
								
							}
							
							
							
							
							
						 });
						 console.log( $('#ganttGrid').find('tr').eq(0).find('td').length)
						 
						  $('#ganttGrid').find('tr').eq(0).find('td').each(function(index){
							  console.log(index)
							  if(index>=5)
							  {
								  var colName=$(this).text();
								  var Sel_colName=colName.split(' ')
								  var sel_colName_Mon=monthNames.indexOf(Sel_colName[1])
								   var colDateS = new Date(Sel_colName[0],sel_colName_Mon,6);
								   var colDateF = new Date(Sel_colName[0],parseInt(sel_colName_Mon)-1,3);
								   if(colDateS>=GanttStart && colDateF<=GanttFinish)
								   {	 //$('#ganttGrid').find('td[data-x="'+parseInt(index-2).toString()+'"]').first().text(colDateF+ colName + index + colDateS)
									    $('#ganttGrid').find('td[data-x="'+parseInt(index-2).toString()+'"]').show()
										console.log("IF : "+colName + index)
								   }
								   else
								   {	console.log("Else : "+colName + index)
									    $('#ganttGrid').find('td[data-x="'+parseInt(index-2).toString()+'"]').hide()
										//$('#ganttGrid').find('td[data-x="'+parseInt(index-2).toString()+'"]').first().text(colDateF+ colName + index + colDateS)
								   }
							  }
							  
						  });
						  var GrLen= $('#ganttGrid').find('tr').eq(0).find('td').length
						  $('#ganttGrid').find('td[data-x="'+parseInt(GrLen-2).toString()+'"]').hide()
						 
		
		SetStateofExpand();
}
	
	function ACCbtnClick(a)
		 {
			 var datasource = $("#gantt").data('kendoGantt').dataSource.data();
			 var selProjName=[];
			  if(datasource !== null)
            {
                datasource.forEach(function(item){                  
                  selProjName.push(item.title) 
                });
            }
			 var rowname=$(a).closest('tr').attr('data-rollup');
			 $("tr[data-res='"+rowname+"']").each(function(){ 
				if($(this).is(':visible'))
				{					
					$(this).hide();
					$($(a).find('span')).removeClass('k-i-arrow-60-down')
					$($(a).find('span')).addClass('k-i-arrow-60-right')
					GanttGridView_State[GanttGridView_lbl.indexOf(rowname)]=false
					
				}
				else
				{					
					$(this).show();
					$($(a).find('span')).removeClass('k-i-arrow-60-right')
					$($(a).find('span')).addClass('k-i-arrow-60-down')
					GanttGridView_State[GanttGridView_lbl.indexOf(rowname)]=true
					
				}
				if($("#chkProjectResources").is(":checked"))
				{
					var projectrow=$(this).find('td').eq(2).text()
					if(selProjName.indexOf(projectrow)!=-1)
					{
						
					}
					else
					{
						$(this).hide()
					}
				}
				
			 });
			 
		 }
		 
	function ShowAllGanttGrid()
	{
		if($("#chkShowALL").is(":checked"))
		{
		$('#ganttGrid').find('tr').show()
		$('.rollupheader').each(function(){
			$(this).find('td').eq(2).find('span').removeClass('k-i-arrow-60-right')
			$(this).find('td').eq(2).find('span').removeClass('k-i-arrow-60-down')
			$(this).find('td').eq(2).find('span').addClass('k-i-arrow-60-down')
			
		})
		}
		else
		{
			$('#ganttGrid').find('tbody').find('tr').hide();
			$('.rollupheader').each(function(){
			$(this).show()
			$(this).find('td').eq(2).find('span').removeClass('k-i-arrow-60-down')
			$(this).find('td').eq(2).find('span').removeClass('k-i-arrow-60-right')
			$(this).find('td').eq(2).find('span').addClass('k-i-arrow-60-right')
			
		})
			
		}
	}
	var chktrue = false
	function ShowOnlySelectedRows()
	{
		var datasource = $("#gantt").data('kendoGantt').dataSource.data();
		var selProjName=[];
		  if(datasource !== null)
            {
                datasource.forEach(function(item){                  
                  selProjName.push(item.title) 
                });
            }
		
		
		
		if($("#chkProjectResources").is(":checked"))
		{
			
			/* $('#ganttGrid').find('tbody').find('tr').hide();			
			$('#ganttGrid').find('tbody').find('tr').each(function(){
				
				var projectrow=$(this).find('td').eq(2).text()
				if(selProjName.indexOf(projectrow)!=-1)
				{
					$(this).show();
				}
			
				});		
			
			$('.rollupheader').each(function(){
			$(this).show()
			$(this).find('td').eq(2).find('span').removeClass('k-i-arrow-60-down')
			$(this).find('td').eq(2).find('span').removeClass('k-i-arrow-60-right')
			$(this).find('td').eq(2).find('span').addClass('k-i-arrow-60-down')
			
		}) */
		
		
			chktrue = true;
			//getGridDataClick();
			getGridDataClickWithFilters()
		
		//cleanandupdateGridCellsV3(selProjName2);
			
		}
		else
		{
			chktrue = false
			//ShowAllGanttGrid();
			//getGridDataClick();
			getGridDataClickWithFilters()
		}
			

	}
	
	
	
		 
	function SetStateofExpand()
	{
		if(GanttGridView_lbl !=[])
		{
		for(i=0;i<GanttGridView_lbl.length;i++)
		{
			if(GanttGridView_State[i]==true || $("#chkShowALL").is(":checked"))
			{
				$('tr[data-rollup="'+GanttGridView_lbl[i]+'"]').find('a').click()
			}
		}
		}
		
	}		
		 
	function GenerateGanttChart(GanttData,linkingData,depData)
	{		
		
		var GanttGridData = new kendo.data.GanttDataSource({
               data:GanttData,	
	       schema: {
                    model: {
                        id: "id",
                        fields: {
                            id: { from: "ID", type: "number" },
                            orderId: { from: "orderId", type: "number", validation: { required: true } },
                            parentId: { from: "ParentID", type: "number", defaultValue: null, nullable: true, validation: { required: true } },
                            start: { from: "Start", type: "date" },
                            end: { from: "Finish", type: "date" },
                            title: { from: "Title", defaultValue: "", type: "string" },
                            percentComplete: { from: "percentComplete", type: "number" },
                            summary: { from: "Summary", type: "boolean" },
                            expanded: { from: "Expanded", type: "boolean", defaultValue: true },
							Projectuid:{ from: "Projectuid", defaultValue: "", type: "string" },
							//StackRank: { from: "StackRank", type: "number" }
                        }
                    }
                }
            });
		
		 var dependenciesDataSource = new kendo.data.GanttDependencyDataSource({
               data:depData,
			   
                schema: {
                    model: {
                        id: "id",
                        fields: {
                            id: { from: "ID", type: "number" },
                            predecessorId: { from: "PredecessorID", type: "number" },
                            successorId: { from: "SuccessorID", type: "number" },
                            type: { from: "Type", type: "number" }
                        }
                    }
                }
            });
			
		 $("#gantt").html("")
		  $("#gantt").kendoGantt({
			   tooltip: {
    visible: true,
    template: "Idea: #= task.title #"
  },
								dataSource: GanttGridData,
								//dependencies: dependenciesDataSource,

					views: [
                    "day",
					"week",
                    "month"
					,{ 	 type: "year"
						,yearHeaderTemplate: "#=''#"
						,monthHeaderTemplate: "#=kendo.toString(start, 'yyyy MMM ')#"
						, selected: true
						,slotSize: 75 }
                ],
			 height: 300,
				range: {
						start: GanttStart,
						end:GanttFinish
					},
                listWidth: "305px",
                showWorkHours: false,
                showWorkDays: false,
                snap: false,
				editable: {
				create: false,				
				resize: false,
				destroy: false,
				dependencyCreate: false,
				dragPercentComplete: false			
				},
				
				dataBound: onDataBound,
			//	save: onSave,
				move: onMove,
				moveEnd: onMoveEnd,
				moveStart: onMoveStart,
				edit: onEdit,
	columns: [
	{ field: "Projectuid", width: 55},
    { field: "title", title: "Idea", editable: false, width: 250 },
	//{ field: "StackRank", title: "Stack Rank", editable: false, width: 65 },
                  //  { field: "start", title: " Start ", format: "{0:M/d/yyyy}", editable: true, width: 80 },
                  //  { field: "end", title: " End ", format: "{0:M/d/yyyy}", editable: true, width: 80 },
                  //  { field: "percentComplete", title: "% Complete", type: "number", editable: true, width: 50 }	
                       
  ]
  
}).data("kendoGantt");

$('#gantt').find('table[role="treegrid"]').find('tr').each(function(index){
	
	var rpname=$(this).find('td').eq(0).text();
	//$(this).find('td').eq(0).html("<input  type='button' class='k-button btn-summary' onclick=CommitSingleproject('"+rpname+"') value='Commit' style='width:30px;' />");
	$(this).find('td').eq(0).html('<span class="pointer" style="float: center;" onclick=CommitSingleproject("'+rpname+'") title="Commit"><span class="k-icon k-i-save"></span></span><span class="pointer" style="float: center;margin-left: 5px;" onclick=EditSingleproject("'+rpname+'") title="Edit"><span class="k-icon k-i-edit"></span></span>');
	
	
	
})	

	
	}


 function onDataBound(e) {
                //alert("Gantt data bound");
				var grid = $("#gantt").data("kendoGantt");
				for(i=0;i<grid.dataSource.data().length;i++)
				{
					if(grid.dataSource.data()[i].title==ChangedProject)
					{
						if(GanttStart > grid.dataSource.data()[i].start)
						{
							e.preventDefault();
						}
						else
						{
							if(GanttFinish < grid.dataSource.data()[i].end)
							{
								e.preventDefault();
							}
							else
							{
							 ChangedProjectStartNew=grid.dataSource.data()[i].start
							 ChangedProjectEndNew=grid.dataSource.data()[i].end
							}
							
						}
				
						
						
					}
				}					
				
			//	console.log("Task bound :: " + grid.dataSource.data()[9].start);
				cleanandupdateGridCellsV2();
            }
function onMove(e) {
				
				console.log("Move: Start:"+e.task.start)
				console.log("Move: End:"+e.task.end)
				if(GanttStart > e.task.start)
				{
					e.preventDefault();
				}
				if(GanttFinish < e.task.end)
				{
					e.preventDefault();
				}
				
            
            }			
function onMoveEnd(e) {
				
				console.log(e.task.end)
				console.log("onMoveEnd: Start:"+e.task.start)
				console.log("onMoveEnd: Start:"+e.task.end)
                //console.log("Task saved :: " + grid.dataSource.data()[9].start);
				console.log("Task saved :: " + e.task.start);
				ChangedProject= e.task.title;
				ChangedProjectStart=e.task.start;
				ChangedProjectEnd=e.task.end;
            }

function onMoveStart(e)
{
		
		//e.preventDefault();
		console.log("onMoveStart: Start:"+e.task.start)
				console.log("onMoveStart: Start:"+e.task.end)
				if(GanttStart > e.task.start)
				{
					e.preventDefault();
				}
				if(GanttFinish < e.task.end)
				{
					e.preventDefault();
				}
  
}	




 function onEdit(e) {
			if ($(e.container).hasClass('k-popup-edit-form')) {
    e.preventDefault();
  }
	}

function EditSingleproject(a)
{
	//alert("clicked");
	var win = window.open('https://projectmadeeasy.sharepoint.com/sites/development/project%20detail%20pages/project%20allocation.aspx?projuid='+a, '_blank');
if (win) {
    //Browser has allowed it to be opened
    win.focus();
} else {
    //Browser has blocked it
    alert('Please allow popups for this website');
}
}	
var sortidx=0;
function fnsortGridData()
{
	if(sortidx%2==0)
	{
		Gridtable.orderBy(2,1);
	}
	else
	{
		Gridtable.orderBy(2,0);
	}
	sortidx++;
	
}

var  data_push = []
function CommitSingleproject(a)
{ 
	data_push = []
	var gantt = $("#gantt").data("kendoGantt");
	
	$('#gantt').find('table[role="treegrid"]').find('tr').each(function(index){
		var task = gantt.dataItem("tr:eq("+index+")");
		if(a.toString()==task.Projectuid.toString())
		{
			 var objsec = {};
			 objsec.Projectuid = task.Projectuid.toString();
             objsec.Start =new Date(task.start);
			  data_push.push(objsec);
			
		}
	});
	var allData ="'"+ JSON.stringify(data_push)+"'";
		$.LoadingOverlay("show");
	    $.ajax({
                url: 'https://allocationgrid.azurewebsites.net/Api/GanttUpdated/Commit',
                type: 'POST',
                async: true,
                processData: false,
                cache: false,
                data: allData,
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                success: function (data) {
                    //// debugger;
                   console.log("Success")
				   $.LoadingOverlay("hide");
				   updateaftercommit();
                },
                error: function (err) {
					
					console.log("Error")
					$.LoadingOverlay("hide");

                }
            });
	
	

}

function updateaftercommit()
{
	

	    $.ajax({        	       // https://projectmadeeasy.sharepoint.com/sites/pwa/_api/ProjectData/Resources?$Select=ResourceId,ResourceName,PrimaryJobRole
                              url: 'https://allocationgrid.azurewebsites.net/Api/GanttUpdated_ProjectList/9FA7C3AC-3564-4836-9A50-8951792AF1B4/1 2020/2 2020',                              
							  type: 'GET',
                              async: false,
                              processData: false,
                              cache: false,              
                              contentType: false,
                              dataType: 'json',
                              success: function (data) {
								  
								 
								  
                               debugger;	
							  
							   var ResponseTable= JSON.parse(data)
							  
						
							  
							  var GanttData = ResponseTable.Table;
							  strOptions=""
							  
							  for (var i = 0; i < GanttData.length; i++) 
							  {							
								
								// arr_ProjectNo.push(GanttData[i].Projectuid)
								// arr_ProjectStart.push(GanttData[i].Start)
								// arr_ProjectFinish.push(GanttData[i].Finish)
								 if(arr_ProjectNo.indexOf(GanttData[i].Projectuid)!=-1)
								 { var idxsp=arr_ProjectNo.indexOf(GanttData[i].Projectuid)
								   arr_ProjectStart[idxsp]=(GanttData[i].Start)
									arr_ProjectFinish[idxsp]=(GanttData[i].Finish)
								 }
								 
							  }										  
							
                              },
                              error: function (err) {
								alert(err);
                              }
                          });         	
}

function CommitAllChangeproject()
{ 
	data_push = []
	var gantt = $("#gantt").data("kendoGantt");
	
	$('#gantt').find('table[role="treegrid"]').find('tr').each(function(index){
		var task = gantt.dataItem("tr:eq("+index+")");
		//if(a.toString()==task.Projectuid.toString())
		{
			 var objsec = {};
			 objsec.Projectuid = task.Projectuid.toString();
             objsec.Start =new Date(task.start);
			  data_push.push(objsec);
			
		}
	});
	var allData ="'"+ JSON.stringify(data_push)+"'";
	
	    $.ajax({
                url: 'https://allocationgrid.azurewebsites.net/Api/GanttUpdated/Commit',
                type: 'POST',
                async: true,
                processData: false,
                cache: false,
                data: allData,
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                success: function (data) {
                    //// debugger;
                   console.log("Success")
                },
                error: function (err) {
					
					console.log("Error")

                }
            });
	
	

}

   </script>
   <script type="text/x-kendo-template" id="template">
    # if (1==1) { #
        <button class='k-button btn-summary'>Click summary</button>
    # } #
</script>