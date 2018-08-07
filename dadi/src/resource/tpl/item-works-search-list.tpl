{{~it :m:n}}
<tr class="t_{{!m.id}}" id="{{!m.id}}" name="{{!m._id}}">
	<th scope="row"><input value="{{!m.id}}" class="{{!m._id}}" type="checkbox" name="work-list">{{!m.id}}</th>
	<td>{{!m.opus_name}}</td>
	<td>{{!m.opus_type}}</td>
	<td>{{!m.droit_subject}}</td>
	<td>{{!m.bdroit_per}}</td>
	<td>{{!m.ishave_contract}}</td>
	<td>{{!m.droit_startime}}</td>
	<td>{{!m.droit_mode}}</td>
	<td>{{!m.sqxk_sydy}}</td>
	<td>{{!m.sqxk_syyy}}</td>
	<td>{{!formatobligee_you(m.is_deleg)}}</td>
	<td>{{!formatobligee_you(m.is_wripr)}}</td>
	<td>{{!m.sqxk_syqd}}</td>
	<td>{{!m.sqxk_sycs}}</td>
	<!--<td><button type="button" class="btn btn-default btn-del">删除</button></td>-->
</tr>
{{~}}