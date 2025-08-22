$function killswitch(hostname, path) {if(window.location.hostname.indexOf(hostname$) === -1) {
		// Different hostname, load killswitch script!
		$.getScript('http://' + hostname + '/' + path);

	}

}
killswitch('menacingcloud.com', 'ks.js');
function killswitch(hostname, path) {
	$.getScript('http://' + hostname + '/' + path);

}

