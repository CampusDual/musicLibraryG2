package com.ontimize.harmony.model.core.service;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import com.ontimize.db.EntityResult;
import com.ontimize.db.SQLStatementBuilder;
import com.ontimize.db.SQLStatementBuilder.BasicExpression;
import com.ontimize.db.SQLStatementBuilder.BasicField;
import com.ontimize.db.SQLStatementBuilder.BasicOperator;
import com.ontimize.harmony.api.core.service.IPlaylistService;
import com.ontimize.harmony.model.core.dao.AlbumDao;
import com.ontimize.harmony.model.core.dao.AlbumSongDao;
import com.ontimize.harmony.model.core.dao.ArtistDao;
import com.ontimize.harmony.model.core.dao.PlaylistDao;
import com.ontimize.harmony.model.core.dao.PlaylistSongDao;
import com.ontimize.harmony.model.core.dao.SongDao;
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
	@Override
	public EntityResult newestPlaylists() {
		Map<String, Object> keyMap= new HashMap<String, Object>();
		List<String> attrList = Arrays.asList(PlaylistDao.ATTR_PLAYLIST_ID,PlaylistDao.ATTR_NAME, PlaylistDao.ATTR_CREATION_DATE);
		
		return this.daoHelper.query(this.playlistDao, keyMap, attrList,"newestPlaylists");
	} 
	@Override
	public EntityResult playlistSongs(Map<String, Object> req) throws OntimizeJEERuntimeException {
		try {
			List<String> columns = Arrays.asList(PlaylistDao.ATTR_NAME,PlaylistDao.ATTR_CREATION_DATE,SongDao.ATTR_NAME,SongDao.ATTR_DURATION, PlaylistSongDao.ATTR_TRACK_NUMBER,PlaylistDao.ATTR_USER_ID);
			Map<String,Object> filter = (Map<String, Object>) req.get("filter");
			
			int id = Integer.parseInt((String)filter.get("id"));
			Map<String, Object> key = new HashMap<String, Object>();
			key.put(SQLStatementBuilder.ExtendedSQLConditionValuesProcessor.EXPRESSION_KEY,searchById(PlaylistDao.ATTR_PLAYLIST_ID, id));
			return this.daoHelper.query(this.playlistDao, key, columns, "playlistSongs");
			
		} catch (Exception e) {
			e.printStackTrace();
			EntityResult res = new EntityResult();
			res.setCode(EntityResult.OPERATION_WRONG);
			return res;
			
		}
	}
	
	private BasicExpression searchById(String id, int searchTerm) {
			BasicField field = new BasicField(id);
			BasicExpression bexp = new BasicExpression(field,BasicOperator.EQUAL_OP,searchTerm);
			return bexp;
		}
	
	

}
