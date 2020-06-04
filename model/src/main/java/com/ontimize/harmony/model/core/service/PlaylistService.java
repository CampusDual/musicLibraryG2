package com.ontimize.harmony.model.core.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import com.ontimize.db.EntityResult;
import com.ontimize.harmony.api.core.service.IPlaylistService;
import com.ontimize.harmony.model.core.dao.PlaylistDao;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;

@Service("PlaylistService")
@Lazy
public class PlaylistService implements IPlaylistService {

	@Autowired private PlaylistDao playlistDao;
	@Autowired private DefaultOntimizeDaoHelper daoHelper;
	@Override
	public EntityResult playlistQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException {

		return this.daoHelper.query(this.playlistDao, keyMap, attrList);
	}
	@Override
	public EntityResult playlistInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
		
		return this.daoHelper.insert(this.playlistDao, attrMap);
	}
	@Override
	public EntityResult playlistUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.update(this.playlistDao, attrMap, keyMap);
		
	}	
	@Override
	public EntityResult playlistDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
		return this.daoHelper.delete(playlistDao, keyMap);
		
	} 
	
	

}
