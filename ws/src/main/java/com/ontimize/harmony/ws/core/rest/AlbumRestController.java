package com.ontimize.harmony.ws.core.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ontimize.db.EntityResult;
import com.ontimize.harmony.api.core.service.IAlbumService;
import com.ontimize.jee.server.rest.ORestController;

@RestController
@RequestMapping("/albums") //TODO TEST
@ComponentScan(basePackageClasses = {com.ontimize.harmony.api.core.service.IAlbumService.class})
public class AlbumRestController extends ORestController<IAlbumService> {
	
	@Autowired
	private IAlbumService albumService;
	
	
	@Override
	public IAlbumService getService() {

		return this.albumService;
	}
	
	@RequestMapping(value = "newestAlbums", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public EntityResult getNewestAlbums() {
		
		return albumService.newestAlbums();
	}

}
