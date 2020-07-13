package com.ontimize.harmony.ws.core.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ontimize.db.EntityResult;
import com.ontimize.harmony.api.core.service.IPlaylistService;
import com.ontimize.jee.server.rest.ORestController;

@RestController
@RequestMapping("/playlist") //TODO TEST
@ComponentScan(basePackageClasses = {com.ontimize.harmony.api.core.service.IPlaylistService.class})
public class PlaylistRestController extends ORestController<IPlaylistService> {
	
	@Autowired
	private IPlaylistService playlistService;
	
	
	@Override
	public IPlaylistService getService() {

		return this.playlistService;
	}
	@RequestMapping(value = "newestPlaylists", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public EntityResult getNewestPlaylists() {
		
		return playlistService.newestPlaylists();
	}
}
