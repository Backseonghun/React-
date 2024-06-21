package org.mysite.board.Controller;

import org.mysite.board.BoardApplication;
import org.mysite.board.Entity.Board;
import org.mysite.board.Repository.BoardRepository;
import org.mysite.board.Service.BoardService;
import org.mysite.board.exception.BoardNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class BoardController {
    @Autowired
    private BoardRepository boardRepository;
    @Autowired
    private BoardService boardService;

    @GetMapping("/board")
    public List<Board> getAllBoards() {
        return boardService.findAll();
    }
    @PostMapping("/boards")
    public Board newBoard(@RequestBody Board board) {
        return boardService.save(board);
    }
    @PostMapping("/addBoard")
    private Board addBoard(@RequestBody Board Board) {
        return boardService.save(Board);
    }
//    @GetMapping("/board/{bno}")
//    public Board getBoardById(@PathVariable Long bno){
//        return boardRepository.findById(bno).orElseThrow(()-> new BoardNotFoundException(bno));
//    }
    @PutMapping("/board/{bno}")
    Board updateBoard(@RequestBody Board newboard, @PathVariable Long bno) {
        return boardRepository.findById(bno)
                .map(board -> {
                    board.setBno(newboard.getBno());
                    board.setTitle(newboard.getTitle());
                    board.setHit(newboard.getHit());
                    board.setContent(newboard.getContent());
                    board.setAuthor(newboard.getAuthor());
                    return boardService.update(board, bno);
                }).orElseThrow(()-> new BoardNotFoundException(bno));
    }
    @DeleteMapping("/board/{bno}")
    public void deleteBoard(@PathVariable Long bno) {
        boardService.delete(bno);
    }
    @GetMapping("/board/{bno}")
    public Optional<Board> getBoardByBno(@PathVariable Long bno) {
        return boardService.getBoardById(bno);
    }
}
