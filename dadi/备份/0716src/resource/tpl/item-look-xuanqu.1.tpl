{{~it :m:n}}
<!--合同详情 作品 gengk-look-->
<tr id="{{!m.id}}" class="c_{{!m.id}}"> 
	<td scope="row"><input type="checkbox" name="a1" value="{{!m.id}}">{{=n + 1}}</td> 
	<td>{{!m.droit_content}}</td> 
	<td>{{!m.droit_propor}}</td> 
	<td>{{!formatobligee_type(m.is_propri)}}</td> 
	<td>{{!formatobligee_you(m.is_wripr)}}</td> 
	<td>{{!formatobligee_you(m.is_deleg)}}</td> 
	<td>{{!formatobligee_you(m.ishave_contract)}}</td> 
	<td>{{!m.droit_type}}</td> 
	<td>{{!m.sqxk_syfs}}</td> 
	<td>{{!m.sqxk_syqd}}</td> 
	<td>{{!m.sqxk_sydy}}</td> 
	<td>{{!m.sqxk_sycs}}</td> 
	<td>{{!m.sqxk_syyy}}</td> 
	<td>{{!m.sqxk_ksrq}}</td> 
	<td>{{!m.sqxk_jsrq}}</td> 
	<td>{{!m.htql_ms}}</td> 
	<td>{{!m.droit_des}}</td>
</tr>
{{~}}