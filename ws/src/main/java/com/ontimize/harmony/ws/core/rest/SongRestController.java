package com.ontimize.harmony.ws.core.rest;



import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ontimize.db.EntityResult;
import com.ontimize.harmony.api.core.service.ISongService;
import com.ontimize.harmony.model.core.service.SongService;
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
	
	@RequestMapping(value = "newestSongs", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public EntityResult getNewestSongs() {
		
		return songService.newestSongs();
		
		
		
	}

}
