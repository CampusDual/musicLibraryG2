package com.ontimize.harmony.model.core.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
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
import com.ontimize.harmony.api.core.service.ISongService;
import com.ontimize.harmony.model.core.dao.SongDao;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import com.ontimize.harmony.model.core.dao.SongDao;
import com.ontimize.harmony.model.core.dao.AlbumDao;
@Service("SongService")
@Lazy
public class SongService implements ISongService {

	@Autowired private SongDao songDao;
	@Autowired private AlbumDao albumDao;
	@Autowired private DefaultOntimizeDaoHelper daoHelper; 
	@Override

	public EntityResult songQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException {
	
		return this.daoHelper.query(this.songDao, keyMap, attrList);
	}
	@Override
	public EntityResult newestSongs()
			throws OntimizeJEERuntimeException {
		Map<String, Object> keyMap= new HashMap<String, Object>();
		List<String> attrList = Arrays.asList(songDao.ATTR_DURATION,songDao.ATTR_NAME,songDao.ATTR_SONG_ID, albumDao.ATTR_CREATION_DATE);
		
		return this.daoHelper.query(this.songDao, keyMap, attrList,"newestSongs");
	}
	
	@Override
	public EntityResult songInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException{
		return this.daoHelper.insert(this.songDao, attrMap);
		}

	@Override
	public EntityResult songUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.update(this.songDao, attrMap, keyMap);
	}

	@Override
	public EntityResult songDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
		
		return this.daoHelper.delete(this.songDao, keyMap);
	}
	
	public EntityResult songSearch( Map<String,Object> req) {
		try {
			List<String> columns = (List<String>) req.get("columns");
			Map<String,Object> filter = (Map<String,Object>) req.get("filter");
			
			
			
			String nameToSearch = (String) filter.get("NAME");
			String option = (String) filter.get("OPTION");
			if(!option.equals("")) {
				Map<String,Object> key = new HashMap<String,Object>();
				key.put(SQLStatementBuilder.ExtendedSQLConditionValuesProcessor.EXPRESSION_KEY,
						searchLike(nameToSearch, option));
				return songService.songQuery(key, columns);
			
		}else {
			Map<String, Object> key = new HashMap<String, Object>();
			key.put(SQLStatementBuilder.ExtendedSQLConditionValuesProcessor.EXPRESSION_KEY, searchAll(nameToSearch));
			return songService.songQuery(key, columns);
		}
		
		}catch(Exception e) {
			e.printStackTrace();
			EntityResult res = new EntityResult();
			res.setCode(EntityResult.OPERATION_WRONG);
			return res;
		}
	}
	
	
}
