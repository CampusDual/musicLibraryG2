package com.ontimize.harmony.ws.core.rest;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ontimize.db.EntityResult;
import com.ontimize.harmony.api.core.service.IPlaylistService;
import com.ontimize.jee.server.rest.ORestController;

@RestController
@RequestMapping("/playlists") //TODO TEST
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
	@RequestMapping(value = "playlistSongs", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public EntityResult playlistSong(@RequestBody Map<String, Object> req) {
		
		return playlistService.playlistSong(req);
	}
	@RequestMapping(value = "playlistSearch", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public EntityResult playlistSearch(@RequestBody Map<String, Object> req) {
		
		return playlistService.playlistSearch(req);
	}
	}

