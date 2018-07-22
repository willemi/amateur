<ul>
	<li>
		<label>作品ID</label>
		<span>{{=it.opus_code || "无"}}</span>
	</li>
	<li>
		<label>作品名称</label>
		<span>{{=it.opus_name || "无"}}</span>
	</li>
	<li>
		<label>作品类型</label>
		<span>{{=it.opus_type || "无"}}</span>
	</li>
	<li>
		<label>作品登记号</label>
		<span>{{!it.name || "无"}}</span>
	</li>
	<li>
		<label>作品登机构</label>
		<span>{{!it.name || "无"}}</span>
	</li>
	<li>
		<label>作品登委托机构</label>
		<span>{{!it.name || "无"}}</span>
	</li>
	<li>
		<label>题材类型</label>
		<span>{{=it.theme_type || "无"}}</span>
	</li>
	<li>
		<label>作品时长</label>
		<span>{{=it.opus_duration || "无"}}</span>
	</li>
	<li>
		<label>发表时间</label>
		<span>{{=it.publish_date || "无"}}</span>
	</li>

	<li>
		<label>创作时间</label>
		<span>{{=it.indite_date || "无"}}</span>
	</li>
	<li>
		<label>收录专辑</label>
		<span>{{=it.embody_album || "无"}}</span>
	</li>
	<li>
		<label>词曲是否有原件</label>
		<span>{{=formatobligee_type(it.is_original)}}</span>
	</li>
	<li class="w100">
		<label>版本说明</label>
		<span>{{=it.version_explain || "无"}}</span>
	</li>
	<li class="w100">
		<label>作品简介</label>
		<span>{{=it.opus_briefing || "无"}}</span>
	</li>
</ul>