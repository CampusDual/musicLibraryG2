package com.ontimize.harmony.ws.core.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ontimize.harmony.api.core.service.IAlbumService;
import com.ontimize.jee.server.rest.ORestController;

@RestController
@RequestMapping("/albums") //TODO TEST
@ComponentScan(basePackageClasses = {com.ontimize.harmony.api.core.service.IAlbumService.class})
public class AlbumRestController extends ORestController<IAlbumService> {
	
	@Autowired
	private IAlbumService songService;
	
	
	@Override
	public IAlbumService getService() {

		return this.songService;
	}

}
