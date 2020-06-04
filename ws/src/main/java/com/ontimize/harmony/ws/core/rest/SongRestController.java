package com.ontimize.harmony.ws.core.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ontimize.harmony.api.core.service.ISongService;
import com.ontimize.jee.server.rest.ORestController;

@RestController
@RequestMapping("/songs") //TODO TEST
@ComponentScan(basePackageClasses = {com.ontimize.harmony.api.core.service.ISongService.class})
public class SongRestController extends ORestController<ISongService> {
	
	@Autowired
	private ISongService songService;
	
	
	@Override
	public ISongService getService() {

		return this.songService;
	}

}
